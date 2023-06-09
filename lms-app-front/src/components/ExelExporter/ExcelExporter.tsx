import React, { FC } from 'react';
// @ts-ignore
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Button, Space } from 'antd';
import getExcelColWidths from './utils/getExelColWidths';

interface IProp {
  apiDataForTable: any;
}
const ExportToExcel: FC<IProp> = ({ apiDataForTable }) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const fileNameTable = 'Данные';

  const exportToCSV = (apiData: any, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    ws['!cols'] = getExcelColWidths(ws);
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Space wrap>
      <Button type="default" size="middle" onClick={() => exportToCSV(apiDataForTable, fileNameTable)}>
        Скачать результат парсинга
      </Button>
    </Space>
  );
};
export default ExportToExcel;
