import {
  Button,
  Form,
  Input,
  InputNumber,
  Typography,
  Select, DatePicker,
} from 'antd';
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import type { BaseOptionType } from 'rc-select/lib/Select';
import categoryOptions from './utils';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Title } = Typography;
const siteRules = [{ required: true, message: 'Пожалуйста выберите сайт!' }];
const categoryForParsingRules = [{ required: true, message: 'Пожалуйста выберете категорию для поиска!' }];
const emailRules = [{ required: true, message: 'Пожалуйста введите свой email!' }];
const keyWordRules = [{ required: true, message: 'Укажите ключевые слова для поиска' }];
const countOfAdsRules = [{ required: true, message: 'Пожалуйста введите колличество страниц для парсинга!' }];

interface Locality {
  type: string;
  slug: string;
  label: string;
  districts: District[];
}

interface District {
  label: string;
  slug: string;
}

interface Region {
  type: string;
  slug: string;
  label: string;
  localities: Locality[];
}

interface IParserForm {
  userId?: string,
  freeRequestCount?: number,
  onSubmitForm: (args: any) => Promise<void>,
  onSubmitFormFailed: (error: any) => void,
}

const initVal = { size: 'default' };
const selectWidth = { width: 200 };
const ParserForm: FC<IParserForm> = (
  {
    userId,
    freeRequestCount,
    onSubmitForm,
    onSubmitFormFailed,
  },
) => {
  const [jsonData, setJsonData] = useState<Region[]>([]);

  useEffect(() => {
    fetch('./api/towns-russia.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error(error));
  }, []);

  const selectFilterOptionWithChildren = useCallback((input: string, option: BaseOptionType | undefined) => (typeof (option?.label) === 'string'
      && option?.label?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0)
    || option?.groupLabel?.toLowerCase().indexOf(input.toLowerCase()) >= 0, []);

  const filterCategory = useCallback((input: string, option: BaseOptionType | undefined) => (typeof (option?.label) === 'string' && option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0), []);

  return (
    <div>
      {!userId && (
      <Title type="secondary" className="text-center" level={5}>
        Это ознакомительная версия парсера, количество бесплатных запросов:
        {' '}
        {freeRequestCount}
        {' '}
        <br />
        {freeRequestCount === 0 && 'Для дальнейшего пользования пройдите регистрацию по ссылке ...'}
      </Title>
      )}
      {
      userId && freeRequestCount === 0 && (
        <Title type="secondary" className="text-center" level={5}>
          Лимит запросов ограничен, через 24 часа счетчик обнулиться
        </Title>
      )
    }
      <Form
        layout="vertical"
        initialValues={initVal}
        className="m-auto max-w-[600px]"
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
        <Form.Item initialValue="all" name="selectedGeoPosition" label="Выберите город/область">
          <Select
            showSearch
            allowClear
            filterOption={selectFilterOptionWithChildren}
            style={selectWidth}
          >
            <Option value="all" key="all" label="Все регионы">
              Все регионы
            </Option>
            {jsonData?.map((region) => (
              <Select.OptGroup key={region.slug} label={`${region.label} ${region.type === 'kray' ? 'край' : 'область'}`}>
                {region.localities.map((city) => (
                  <Option
                    key={city.slug}
                    label={`${city.type === 'city' && 'город'} ${city.type === 'selo' && 'село'} ${city.type === 'derevnya' && 'деревня'} ${city.label} `}
                    groupLabel={`${region.label} ${region.type === 'kray' ? 'край' : 'область'}`}
                  >
                    {city.label}
                  </Option>
                ))}
              </Select.OptGroup>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="categoryForParsing" rules={categoryForParsingRules} label="Выберите категорию">
          <Select
            showSearch
            placeholder="Все категории"
            allowClear
            filterOption={filterCategory}
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
