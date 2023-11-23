import React, { useMemo, useState } from 'react';
import {
  Card, Divider, Steps, Image,
  Typography, Alert,
} from 'antd';
import scrapperFormImg from '../../../public/assets/formScrapper.png';
import scrapperFormFilter from '../../../public/assets/loadData.png';
import result from '../../../public/assets/result.png';
import demoOne from '../../../public/assets/demoStep1.png';
import CommonLayout from '../../components/layout/CommonLayout';

const { Title } = Typography;

const InstructionPage = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  const stepsItems = useMemo(() => [
    {
      title: <h3>Ознакомтесь с работой парсера</h3>,
      description: current === 0 ? (
        <div>
          <Image src={demoOne} />
          <Alert className="max-w-[500px] my-2" showIcon message="Выберете в меню пункт Демо парсер" type="info" />
          <Image src={scrapperFormImg} />
          <Alert
            className="max-w-[500px] my-2"
            showIcon
            message={(
              <div>
                <p>
                  В бесплатной версии вы можете сделать
                  5 запросов, для ознакомления с минимальным функционалом парсера.
                  {' '}
                  <br />
                  После 5 запросов доступ к бесплатной версии парсера будет закрыт.
                  {' '}
                  <br />
                  Что бы продолжить работу с парсером нужно зарегистрироваться и ознакомиться с тарифами.
                </p>
              </div>
              )}
            type="info"
          />

        </div>
      ) : null,
    },
    {
      title: <h3>Настройте фильтр объявлений и нажмите начать парсинг</h3>,
      description: current === 1 ? <Image src={scrapperFormFilter} /> : null,
    },
    {
      title: (
        <h3>
          Получите запрошенные данные в удобном формате
        </h3>
      ),
      description: current === 2 ? (
        <div>
          <Image src={result} />
          <Alert
            className="max-w-[500px] my-2"
            showIcon
            message={
                (
                  <p>
                    Данные предоставляються в удобном формате EXCEL,
                    так же возможно индивидуальное предоставление в формате JSON.
                  </p>
                )
              }
          />
        </div>

      ) : null,
    },
  ], [current]);

  return (
    <CommonLayout>
      <Card className="text-lg">
        <Title level={2}>Запустите парсер в 3 этапа:</Title>
        <Divider />
        <div className="max-w-[850px]">
          <Steps
            current={current}
            onChange={onChange}
            direction="vertical"
            size="default"
            items={stepsItems}
          />
        </div>
      </Card>
    </CommonLayout>
  );
};

export default InstructionPage;
