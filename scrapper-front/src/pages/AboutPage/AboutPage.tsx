import React from 'react';
import {
  Button, Card, Divider, Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import CommonLayout from '../../components/layout/CommonLayout';
import { LAW_PAGE } from '../../routes';

const { Title } = Typography;

const AboutPage = () => (
  <CommonLayout>
    <Card className="text-lg">
      <Title level={2}>
        Раскройте всю мощь данных с помощью
        <br />
        {' '}
        наших передовых инструментов парсинга!
      </Title>
      <Divider />
      <div className="max-w-[800px]">
        <p className="mb-2">
          Наша команда уже 2 года профессионально занимаеться парсингом.
          За это время мы смогли изучить особенности рынка, набить себе
          шишек и отработать собственные стратегии и создать качественные
          инструменты для парсинга сайтов.
          В нашей команде уже 3 программиста занимаются
          парсингом и ежедневно мы парсим более 300 сайтов.
        </p>
      </div>
      <Divider />
      <div>
        <Title level={2}> Чем мы занимаемся?</Title>
        <div className="flex flex-col justify-between items-start gap-3 max-w-[800px]">
          <p className="mb-2">
            Наш сервис оказывает услуги по парсингу коммерческих онлайн-площадок.
            На портале представлены базы компаний в самых востребованных сферах продаж.
            Для ведения бизнеса в Сети, как и в оффлайне, необходимо постоянно анализировать рынок.
            Пристальное внимание предприниматели уделяют ассортименту и ценам конкурентов.
            Комплекс собранных данных позволяет совершенствовать собственный магазин,
            расширять каталог продукции, устанавливать конкурентные цены,
            проводить скидки и акции с целью привлечения клиентов и увеличения продаж.
            Сервис осуществляет парсинг сайтов магазинов из разных сфер,
            чтобы помогать начинающим бизнесменам развивать свое дело.
            На портале представлены базы данных магазинов, аптек, ресторанов, производителей,
            маркетплейсов и не только. С помощью удобных фильтров можно отобрать
            необходимые компании и получить готовый отчет в формате excel.
            В наличии как бесплатные демонстрационные базы данных, так и платные варианты.
          </p>
          <p className="mb-2">
            Сервис использует программное обеспечение,
            которое мониторит различные сайты, собирает полезную информацию,
            среди которой ассортимент товаров, цены, контактные данные.
            Программа объединяет сведения в таблицу, удобную для восприятия.
            Готовые таблицы отправляются клиентам.
            Согласно действующим в РФ законам, каждый имеет право получать
            информацию из открытых источников. Под ограничения попадают данные,
            которые касаются авторских и смежных прав, коммерческой тайны,
            ограничения конкуренции. В процессе парсинга не должна страдать
            скорость работы сайта конкурента, не должны нарушаться условия
            использования конкурентной площадки. Под запретом также сбор персональной
            информации клиентов магазинов и досок объявлений.
            осуществляет парсинг с соблюдением законов РФ и собирает данные
            только из открытых источников без нарушения действующих норм.
            Базы данных, которые передает клиентам, получены законным путем.
            Таблицы excel перед отправкой проверяются на вредоносное ПО.
          </p>
        </div>
        <Link to={LAW_PAGE}>
          <Button type="primary">
            ПАРСИНГ И ЗАКОНЫ РФ
          </Button>
        </Link>
      </div>
    </Card>
  </CommonLayout>
);

export default AboutPage;
