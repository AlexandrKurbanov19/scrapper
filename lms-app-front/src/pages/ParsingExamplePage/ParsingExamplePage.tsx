import React, { FC } from 'react';
import {
  Button, Card, Divider, Tag, Typography,
} from 'antd';
import CommonLayout from '../../components/layout/CommonLayout';

const { Title, Text } = Typography;

const ParsingExamplePage: FC = () => (
  <CommonLayout>
    <Card className="text-lg">
      <Title level={2}>Примеры парсинга открытых источников</Title>
      <Text className="text-base">
        В этом разделе собраны бесплатные примеры парсинга сайтов из разных категорий.
        {' '}
        <br />
        С сайтов собираются только открытые данные.
      </Text>
      <Divider />
      <div className="flex flex-wrap justify-between items-baseline gap-3">
        <Card title="WILDBERRIES" bordered className="max-w-[250px] lg:max-w-[350px] bg-blue-50">
          <p>
            Парсинг Wildberries: цены и ассортимент конкурентов, наполнение товарных карточек,
            остатки на складе, отзывы и рейтинги, количество продаж, анализ ТОП Вайлдбериз!
            Скачайте готовую базу в 1 клик для загрузки в CRM, 1С, PowerBI/Google BigQuery,
            Excel или по протоколу WebDav (данные актуальны на 14.10.2021 г.).
          </p>
          <div className="flex flex-col items-center p-2 lg:flex-row lg:justify-evenly mt-5 mb-5 border-[1px] border-solid border-grey rounded">
            <p>Тип базы:</p>
            <Tag color="green">Демонстрационная</Tag>
          </div>
          <Button type="primary" className="block m-auto" target="_blank" href="https://disk.yandex.ru/i/UQVZ_aaE1HqpyA">Скачать</Button>
        </Card>
        <Card title="БАЗА ОПТОВЫХ КОМПАНИЙ РОССИИ" bordered className="max-w-[250px] lg:max-w-[350px] bg-blue-50">
          <p>
            Оптовые компании и поставщики в готовой базе (ОКВЭД 45-46):
            скачайте в 1 клик для рассылки или обзвона. Чистая валидная база оптовиков
            (дистрибьюторы, поставщики, импортеры, экспортеры) в формате xls или csv для обзвона,
            выгрузки в CRM, сервисы рассылок. Обновляется регулярно, собрана собственным ПО,
            содержит контакты директоров / ЛПР и налоговую информацию.*
          </p>
          <div className="flex flex-col items-center p-2 lg:flex-row lg:justify-evenly mt-5 mb-5 border-[1px] border-solid border-grey rounded">
            <p>Тип базы:</p>
            <Tag color="green">Демонстрационная</Tag>
          </div>
          <Button
            type="primary"
            className="block m-auto"
            target="_blank"
            href="https://disk.yandex.ru/d/J5ND1ma23RfxzQ"
          >
            Скачать
          </Button>
        </Card>
        <Card title="ДНС (DNS)" bordered className="max-w-[250px] lg:max-w-[350px] bg-blue-50">
          <p>
            Скачать пример парсинга интернет-магазина
            DNS-SHOP (ДНС, dns-shop.ru) или заказать под ключ: выбор регионов,
            категорий, настроек парсинга. Отслеживайте цены конкурента на товары,
            мониторьте оборачиваемость, вводите новые позиции в ассортиментную матрицу.
            Формат файлов – CSV, EXCEL. Ежедневный парсинг, стабильные обновления, загрузка
            в админку в 1 клик (отдаем по API, WebDav, браузеру),
            профессиональный обход систем защиты.
            {' '}
          </p>
          <div className="flex flex-col items-center p-2 lg:flex-row lg:justify-evenly mt-5 mb-5 border-[1px] border-solid border-grey rounded">
            <p>Тип базы:</p>
            <Tag color="green">Демонстрационная</Tag>
          </div>
          <Button
            type="primary"
            className="block m-auto"
            target="_blank"
            href="https://disk.yandex.ru/d/bCg1Qxucsj_COg"
          >
            Скачать
          </Button>
        </Card>
        <Card title="АВИТО.РУ" bordered className="max-w-[250px] lg:max-w-[350px] bg-blue-50">
          <p>
            Пример (фрагмент) парсинга «АВИТО.РУ» –
            крупнейшая доска частных объявлений в России.
            Мы собираем всю общедоступную информацию в различных
            категориях сайта для дальнейшего анализа.
          </p>
          <div className="flex flex-col items-center p-2 lg:flex-row lg:justify-evenly mt-5 mb-5 border-[1px] border-solid border-grey rounded">
            <p>Тип базы:</p>
            <Tag color="green">Демонстрационная</Tag>
          </div>
          <Button
            type="primary"
            className="block m-auto"
            target="_blank"
            href="https://disk.yandex.ru/d/qZc7XDjYpqltLg"
          >
            Скачать
          </Button>
        </Card>
        <Card title="ОЗОН.РУ" bordered className="max-w-[250px] lg:max-w-[350px] bg-blue-50">
          <p>
            Ежедневный парсинг ozon.ru: мониторинг цен (старые и новые),
            наличие на складе, оборот и продажи, отзывы и рейтинги, а также многое другое в 1 клик!
            Скачайте файл CSV & XML с разбивкой по категориям или закажите парсинг
            по индивидуальному запросу. Обход Cloudflare и систем защиты, сбор любого
            количества карточек и товаров, гарантия полноты и регулярности данных.
          </p>
          <div className="flex flex-col items-center p-2 lg:flex-row lg:justify-evenly mt-5 mb-5 border-[1px] border-solid border-grey rounded">
            <p>Тип базы:</p>
            <Tag color="green">Демонстрационная</Tag>
          </div>
          <Button
            type="primary"
            className="block m-auto"
            target="_blank"
            href="https://disk.yandex.ru/d/9Fn17NXZwEYdgQ"
          >
            Скачать
          </Button>
        </Card>
      </div>
    </Card>
  </CommonLayout>
);

export default ParsingExamplePage;
