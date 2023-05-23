import {
  Card,
  Layout,
  Typography,
  Spin,
} from 'antd';
import {useCallback, useEffect, useMemo, useState} from "react";
import {
  useCreateHistoryRequestMutation,
  useGetParsingDataMutation,
  GetParsingDataMutation
} from '../../generated/graphql';
import ResultScrapper from "../../components/ResultScrapper/ResultScrapper";
import ParserForm from "./ParserForm";

const { Title } = Typography;

interface IParsingDataItem {
  address?: string,
  currency?: string,
  dateOfPosting?: string,
  description?: string,
  id?: string,
  price?: number,
  title?: string,
  url?: string,
  sellerRating?: string,
  sellerReviewsCount?: string,
  sellerInfo?: string,
}

const Parser = () => {
  const [parsingData, setParsingData] = useState<GetParsingDataMutation['getParsingData'] | undefined>(undefined);
  const [freeRequest, setFreeRequest] = useState(
    { count:  0}
  );
  const [pending, setPending] = useState<boolean>(false);
  const [createHistoryRequest, { data: historyRequestData}] = useCreateHistoryRequestMutation();
  const [getParsingData, { data: parsingResponseData, loading }] = useGetParsingDataMutation({
    onCompleted: (data) => {
      setPending(false);
      if (data) {
        setParsingData(data?.getParsingData?.json);
      }
      if (freeRequest.count > 0 && Number(freeRequest.count)) {
        setFreeRequest((prev) => {
          localStorage.setItem('freeRequest', JSON.stringify(freeRequest.count - 1));
          return { ...prev, count: prev.count - 1};
        })
      }
    }
  });

  useEffect(() => {
    const oldCount = Number(localStorage.getItem('freeRequest'));
    if (oldCount && oldCount !== freeRequest.count) {
      setFreeRequest((prev) => ({ ...prev, count: oldCount}))
    }
  }, []);

  const onSubmitFailed = useCallback( (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, [])


  const goToScrapperForm = useCallback(() => {
    setParsingData(undefined);
  }, [setParsingData]);

  const onSubmit = useCallback(async (values: any) => {
    setPending(true)
    if (values) {
      await createHistoryRequest({
        variables: {
          data: {
            dataForParsing: values,
          }
        },
        onCompleted: async () => {
          await getParsingData({
            variables: {
              data: {
                dataForParsing: values,
              }
            }
          });
        }
      })

    }
  }, [getParsingData]);

  const historyRequestDataId = useMemo(() => historyRequestData?.createHistoryRequest?.data?.id, [historyRequestData]);

  const normalizedData = useMemo(() => {
    if (parsingData && Array.isArray(parsingData)) {
      return parsingData?.map((el: IParsingDataItem) => ({
        "Название": el?.title,
        "Дата публикации": el?.dateOfPosting,
        "Цена товара": el?.price,
        "Ссылка": el?.url,
        "Описание товара": el?.description,
        "Валюта": el?.currency,
        "Адрес": el?.address,
        "Информация о продавце": el?.sellerInfo,
      }))
    }
    return [];
  }, [parsingData]);

  return (
    <Layout>
      <Spin spinning={pending} size="large" tip="Выполняеться парсинг...">
        <Card className="h-full">
          <Title className="text-center" type="danger" level={2}>БЕСПЛАТНЫЙ СБОР БАЗЫ</Title>
          {
            !parsingData && (
            <ParserForm
              freeRequestCount={freeRequest.count}
              onSubmitForm={onSubmit}
              onSubmitFormFailed={onSubmitFailed}
            />
            )
          }
          {
            parsingData && (
              <ResultScrapper
                loading={loading}
                historyRequestDataId={historyRequestDataId}
                dataForDownload={normalizedData}
                goToScrapperForm={goToScrapperForm}
              />
            )
          }
        </Card>
      </Spin>
    </Layout>
  );
};
export default Parser;
