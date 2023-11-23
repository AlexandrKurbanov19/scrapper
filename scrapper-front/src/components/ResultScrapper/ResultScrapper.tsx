import React, { FC } from 'react';
import {
  Alert, Badge, Button, Card, Descriptions, Tag,
} from 'antd';
import ExportToExcel from '../ExelExporter/ExcelExporter';

interface IProp {
  loading?: boolean,
  historyRequestDataId?: string | null,
  dataForDownload: any,
  goToScrapperForm: () => void,
}

const ResultScrapper: FC<IProp> = (
  {
    loading,
    historyRequestDataId,
    dataForDownload,
    goToScrapperForm,
  },
) => (
  <Card className="mt-5 mb-5 m-auto max-w-[600px]">
    <Alert
      message="Спасибо за выбор нашей компании. Ссылка на скачивание файла появится на этой странице по завершению сбора базы.
Не закрывайте и не обновляйте эту страницу. Статус заказа обновляется автоматически, его Вы можете посмотреть в таблице ниже."
      type="error"
    />
    <Descriptions className="mt-5 mb-5" bordered>
      <Descriptions.Item label="Номер заказа:" span={3}>
        <Tag color="green">{historyRequestDataId}</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="Статус заказа:" span={3}>
        {
            !loading && <Badge status="success" text="Выполнен" />
          }
        {
            loading && <Badge status="processing" text="В очереди на выполнение" />
          }

      </Descriptions.Item>
      {dataForDownload?.length && (
        <Descriptions.Item label="Файл для скачивания:" span={3}>
          <ExportToExcel apiDataForTable={dataForDownload} />
        </Descriptions.Item>
      )}
      {!dataForDownload?.length && (
        <Descriptions.Item label="Результат:" span={3}>
          <Tag color="red">
            Ничего не найдено в выбранной области поиска.
            {' '}
            <br />
            Задайте запрос по-другому или установите более мягкие ограничения.
          </Tag>
        </Descriptions.Item>
      )}
    </Descriptions>
    <Button onClick={goToScrapperForm}>Вернуться назад</Button>
  </Card>
);

export default ResultScrapper;
