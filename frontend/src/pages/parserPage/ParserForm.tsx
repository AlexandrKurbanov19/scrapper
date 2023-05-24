'use client';

import {
  Button,
  Form,
  Input,
  InputNumber,
  Typography,
  Select, DatePicker, Switch,
} from 'antd';
import {categoryOptions} from "./utils";
import {FC} from "react";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Title } = Typography;
const siteRules = [{ required: true, message: 'Пожалуйста выберите сайт!' }]
const categoryForParsingRules = [{ required: true, message: 'Пожалуйста выберете категорию для поиска!' }]
const emailRules = [{ required: true, message: 'Пожалуйста введите свой email!' }]
const keyWordRules = [{ required: true, message: 'Укажите ключевые слова для поиска' }]
const countOfAdsRules = [{ required: true, message: 'Пожалуйста введите колличество страниц для парсинга!'  }];

interface IParserForm {
  freeRequestCount?: number,
  onSubmitForm: (args: any) => Promise<void>,
  onSubmitFormFailed: (error: any) => void,
}

const ParserForm: FC<IParserForm> = (
  {
    freeRequestCount,
    onSubmitForm,
    onSubmitFormFailed
  }
) => {
  return (
    <div>
      <Title type="secondary" className="text-center" level={5}>
        Это ознакомительная версия парсера, количество бесплатных запросов: {freeRequestCount} <br/>
        {freeRequestCount === 0 && 'Для дальнейшего пользования пройдите регистрацию по ссылке ...'}
      </Title>
      <Form
        layout="vertical"
        initialValues={{ size: "default" }}
        style={{ maxWidth: 600 }}
        className="m-auto"
        onFinish={onSubmitForm}
        onFinishFailed={onSubmitFormFailed}
      >

        <Form.Item name="siteNameForParsing" initialValue="avito" label="Выберите сайт" rules={siteRules}>
          <Select
            placeholder="Выберите сайт"
            allowClear
          >
            <Option value="avito">Avito</Option>
            <Option value="yula" disabled>Yula</Option>
            <Option value="wildberries" disabled>Wildberries</Option>
            <Option value="ozon" disabled>Ozon</Option>
            <Option value="LAMODA" disabled>LAMODA</Option>
          </Select>
        </Form.Item>
        <Form.Item initialValue={'all'} name="selectedGeoPosition" label="Выберите город/область">
          <Select
            placeholder="Москва"
            allowClear
          >
            <Option value="moskva ">Москва </Option>
            <Option value="novosibirsk">Новосибирск </Option>
            <Option value="barnaul">Барнаул</Option>
            <Option value="all">Все регионы</Option>
          </Select>
        </Form.Item>
        <Form.Item name="categoryForParsing" rules={categoryForParsingRules} label="Выберите категорию">
          <Select
            placeholder="Все категории"
            allowClear
            options={categoryOptions}
          />
        </Form.Item>
        <Form.Item name="keyWords" rules={keyWordRules} label="Введите ключевые слова для поиска">
          <Input placeholder="Iphone 13 Pro" />
        </Form.Item>
        <Form.Item rules={countOfAdsRules} name="page" label="Введите количество страниц">
          <InputNumber min={1} max={20} placeholder="10" />
        </Form.Item>
        <Form.Item name="email" rules={emailRules} label="Введите email">
          <Input placeholder="test@ya.ru" />
        </Form.Item>
        <Form.Item initialValue="0" name="adsAuthor" label="Выберите тип автора объявления">
          <Select
            placeholder="Любой"
            allowClear
          >
            <Option value="0">Любой</Option>
            <Option value="1">Частное лицо</Option>
            <Option value="2">Компания</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="selleRating"
          initialValue={undefined}
          label="Рейтинг продавца"
        >
          <Select
            placeholder="Любой"
            allowClear
          >
            <Option value={undefined}>Любой</Option>
            <Option value="1212562">4 звезды и выше</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Form.Item name="pmin" className="inline-block mr-3" label="Цена от:">
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item name="pmax" className="inline-block" label="Цена до:">
            <InputNumber min={0} />
          </Form.Item>
        </Form.Item>
        <Form.Item name="rangeDate" label="Выберете диапозоны дат для поиска">
          <RangePicker
            format="YYYY-MM-DD"
          />
        </Form.Item>
        {!!freeRequestCount && freeRequestCount > 0 && (
          <Button type="primary" danger htmlType="submit" block>Начать парсинг</Button>
        )}
      </Form>
    </div>
  );
};
export default ParserForm;
