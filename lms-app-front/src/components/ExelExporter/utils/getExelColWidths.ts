import { WorkSheet } from 'xlsx';

const getExcelColWidths = (worksheet: WorkSheet) => {
  const maxColWidthsMap = Object.keys(worksheet)
    /** удаляем !ref, !cols, !merges, !protect, !autofilter ключи
     * оставляем только ключи с ячейками A1, A2, B3, AG34 и т.д.
     */
    .filter((cellName) => cellName.charAt(0) !== '!')
    /**
     * Проходим по всем ячейкам и заполняем таблицу вида
     * <название колонки в excel>:<максимальное количество символов в колонке>
     * A: 3,
     * B: 34,
     * AG: 43
     */
    .reduce((acc: {
      [key: string]: number
    }, cellName) => {
      const colName = cellName.replace(/\d/g, ''); // A, B, AA, AC, AG ...
      const cellContentString = worksheet[cellName].v;

      if (typeof cellContentString !== 'string') {
        return acc;
      }

      if (typeof acc[colName] !== 'undefined') {
        acc[colName] = Math.max(acc[colName], cellContentString.length);
      } else {
        acc[colName] = cellContentString.length;
      }

      return acc;
    }, {});

  return Object.keys(maxColWidthsMap)
    .sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }

      return a.localeCompare(b);
    })
    .map((key) => ({
      width: maxColWidthsMap[key],
    }));
};
export default getExcelColWidths;
