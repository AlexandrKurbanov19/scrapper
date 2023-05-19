import {
  Button, Card,
  Form,
  Input,
  InputNumber, Layout,
  Typography,
  Select, DatePicker, Spin,
} from 'antd';
import {categoryOptions} from "./utils";
import {useCallback, useMemo, useState} from "react";
import {useCreateHistoryRequestMutation, HistoryRequestInput, useGetParsingDataMutation} from '../../generated/graphql';
import { ExportToExcel } from "../components/ExelExporter/ExcelExporter";
import {data} from "autoprefixer";
import ResultScrapper from "../components/ResultScrapper/ResultScrapper";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Title } = Typography;
const siteRules = [{ required: true, message: 'Пожалуйста выберите сайт!' }]
const countOfAdsRules = [{ required: true, message: 'Пожалуйста введите колличество обьявлений!'  }];

const WebscraperForm = () => {
  const [pending, setPending] = useState<boolean>(false);
  const [getParsingData, { data: parsingData, loading }] = useGetParsingDataMutation({
    onCompleted: () => {
      setPending(false);
    }
  });
  const onFinishFailed = useCallback( (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, [])

  const onFinish = useCallback(async (values: any) => {
    setPending(true)
    if (values) {
      await getParsingData({
        variables: {
          data: {
            dataForParsing: values,
          }
        }
      });
    }
  }, [getParsingData]);

  const normalaizeData = useMemo(() => {
    return parsingData?.getParsingData?.json?.map((el: any) => ({
      "Ссылка": el.url,
      "Валюта": el.currency,
      "Цена товара": el.price,
      "Описание товара": el.description,
      "Дата публикации": el.dateOfPosting,
    }))
  }, [parsingData]);

  return (
      <Layout>
        <Spin spinning={pending} size="large" tip="Выполняеться парсинг...">
          <Card className="h-full">
            <Title className="text-center" type="danger" level={2}>БЕСПЛАТНЫЙ СБОР БАЗЫ</Title>
            {
              !parsingData && (
                <div>
                  <Title type="secondary" className="text-center" level={5}>Это ознакомительная версия парсера, количество бесплатных запрос: 5</Title>
                  <Form
                    layout="vertical"
                    initialValues={{ size: "default" }}
                    style={{ maxWidth: 600 }}
                    className="m-auto"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >

                    <Form.Item name="siteNameForParsing" label="Выберите сайт" rules={siteRules}>
                      <Select
                        placeholder="Выберите сайт"
                        allowClear
                      >
                        <Option value="avito">Avito</Option>
                        {/*<Option value="yula">Yula</Option>*/}
                      </Select>
                    </Form.Item>
                    <Form.Item rules={countOfAdsRules} name="page" label="Введите количество страниц">
                      <InputNumber min={1} placeholder="10" />
                    </Form.Item>
                    <Form.Item name="keyWords" label="Введите ключевые слова для поиска">
                      <Input placeholder="Iphone 13 Pro" />
                    </Form.Item>
                    <Form.Item initialValue="Either" name="adsAuthor" label="Выберите тип автора объявления">
                      <Select
                        placeholder="Любой"
                        allowClear
                      >
                        <Option value="Either">Любой</Option>
                        <Option value="Person">Частное лицо</Option>
                        <Option value="Company">Компания</Option>
                        <Option value="Owner">Собственник</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item initialValue={'all'} name="selectedGeoPosition" label="Выберите город/область (можно несколько)">
                      <Select
                        placeholder="Москва"
                        allowClear
                        mode="multiple"
                      >
                        <Option value="moskva ">Москва </Option>
                        <Option value="novosibirsk">Новосибирск </Option>
                        <Option value="barnaul">Барнаул</Option>
                        <Option value="all">Все регионы</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="categoryForParsing" label="Выберите категорию">
                      <Select
                        placeholder="Все категории"
                        allowClear
                        mode="multiple"
                        options={categoryOptions}
                      />
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
                    <Button type="primary" danger htmlType="submit" block>Начать парсинг</Button>
                  </Form>
                </div>
              )
            }
            {
              parsingData && (
                <ResultScrapper
                  loading={loading}
                  dataForDownload={normalaizeData}
                />
              )
            }
          </Card>
        </Spin>
      </Layout>
  );
};
export default WebscraperForm;
