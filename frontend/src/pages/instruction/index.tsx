import React, {useState} from 'react';
import {Card, Divider, Steps} from "antd";
import { Typography } from 'antd';
import Image from "next/image";
import scrapperFormImg from  "../../../public/assets/formScrapper.png"
import demoOne from  "../../../public/assets/demoStep1.png"

const { Title} = Typography;

const Index = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <Card className="text-lg">
      <Title level={4}>Запустите парсер в 4 этапа :</Title>
      <Divider/>
      <div className="max-w-[850px]">
        <Steps
          current={current}
          onChange={onChange}
          direction="vertical"
          size="default"
          items={[
            {
              title: <h3>Ознакомтесь с работой парсера</h3>,
              description: current === 0 ? <div>
                <p>Выберете в меню пункт Демо-Парсер</p>
                <Image src={demoOne} />
                <p>
                  В бесплатной версии вы можете сделать 5 запросов, для ознакомления с минимальным функционалом парсера. <br/>
                  После 5 запросов доступ к бесплатной версии парсера будет закрыт. <br/>
                  Что бы продолжить работу с парсером нужно зарегистрироваться и ознакомиться с тарифами.
                </p>
                <Image src={scrapperFormImg} />
              </div> : null,
            },
            {
              title: <h3>Зарегистируйтесь в личном кабинете</h3>,
            },
            {
              title: <h3>Настройте фильтр объявлений</h3>,
              description: current === 2 ? <Image src={scrapperFormImg} /> : null,
            },
            {
              title: <h3>
                Произведите оплату парсера удобным для Вас способом
              </h3>,
            },
            {
              title: <h3>
                Получите запрошенные данные в удобном формате (EXEL, JSON).
              </h3>,
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default Index;