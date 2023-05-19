import React, {FC} from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import {Button, Space} from "antd";
import {getExcelColWidths} from "./utils/getExelColWidths";

interface IProp {
  apiData: any;
}
export const ExportToExcel: FC<IProp> = ({ apiData }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = "Данные";

  const exportToCSV = (apiData: any, fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    ws['!cols'] = getExcelColWidths(ws);
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Space wrap>
      <Button type="default" size="middle" onClick={(e) => exportToCSV(apiData, fileName)}>
        Скачать результат парсинга
      </Button>
    </Space>
  );
};