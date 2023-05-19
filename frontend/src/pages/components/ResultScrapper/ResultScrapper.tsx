import React, {FC} from 'react';
import {Alert, Badge, Card, Descriptions, Tag} from "antd";
import {ExportToExcel} from "../ExelExporter/ExcelExporter";

interface IProp {
  loading?: boolean,
  dataForDownload: any,
}

const ResultScrapper: FC<IProp> = ({ loading, dataForDownload }) => {
  return (
    <Card className="mt-5 mb-5 m-auto max-w-[600px]">
      <Alert message="Спасибо за выбор нашей компании. Ссылка на скачивание файла появится на этой странице по завершению сбора базы.
Не закрывайте и не обновляйте эту страницу. Статус заказа обновляется автоматически, его Вы можете посмотреть в таблице ниже." type="error" />
      <Descriptions className="mt-5 mb-5" bordered>
        <Descriptions.Item label="Номер заказа:" span={3}>
          <Tag color="green">84225</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Статус заказа:" span={3}>
          {
            !loading &&  <Badge status="success" text="Выполнен" />
          }
          {
            loading &&  <Badge status="processing" text="В очереди на выполнение" />
          }

        </Descriptions.Item>
        <Descriptions.Item label="Файл для скачивания:" span={3}>
          <ExportToExcel apiData={dataForDownload} />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ResultScrapper;