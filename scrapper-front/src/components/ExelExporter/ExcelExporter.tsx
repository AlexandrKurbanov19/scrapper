import React, { FC, useCallback } from 'react';
import { Button, Space } from 'antd';
import getExcelColWidths from './utils/getExelColWidths';

interface IProp {
  apiDataForTable: any;
}
const ExportToExcel: FC<IProp> = ({ apiDataForTable }) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const fileNameTable = 'Данные';

  const exportToCSV = async (apiData: any, fileName: string) => {
    // @ts-ignore
    const { default: FileSaver } = await import('file-saver');
    const { default: XLSX } = await import('xlsx');
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    ws['!cols'] = getExcelColWidths(ws);
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  const onButtonClick = useCallback(() => exportToCSV(apiDataForTable, fileNameTable), [apiDataForTable]);

  return (
    <Space wrap>
      <Button type="default" size="middle" onClick={onButtonClick}>
        Скачать результат парсинга
      </Button>
    </Space>
  );
};
export default ExportToExcel;
