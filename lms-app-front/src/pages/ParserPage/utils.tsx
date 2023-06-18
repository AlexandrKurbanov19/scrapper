const categoryOptions = [
  {
    label: 'Недвижимость',
    value: 'nedvizhimost',
    options: [
      { label: 'Квартиры', value: 'kvartiry' },
      { label: 'Комнаты', value: 'komnaty' },
      { label: 'Дома, дачи, коттеджи', value: 'doma_dachi_kottedzhi' },
      { label: 'Земельные участки', value: 'zemelnye_uchastki' },
      { label: 'Гаражи и машиноместа', value: 'garazhi_i_mashinomesta' },
      { label: 'Коммерческая недвижимость', value: 'kommercheskaya_nedvizhimost' },
      { label: 'Недвижимость за рубежом', value: 'nedvizhimost_za_rubezhom' },
    ],
  },
  {
    label: 'Работа',
    options: [
      { label: 'Вакансии', value: 'vakansii' },
    ],
  },
  {
    label: 'Услуги',
    options: [
      { label: 'Предложения услуг', value: 'predlozheniya_uslug' },
      { label: 'Запросы на услуги', value: 'zapros_uslug' },
    ],
  },
  {
    label: 'Транспорт',
    options: [
      { label: 'Автомобили', value: 'avtomobili' },
      { label: 'Мотоциклы и мототехника', value: 'mototsikly_i_mototehnika' },
      { label: 'Грузовики и спецтехника', value: 'gruzoviki_i_spetstehnika' },
      { label: 'Водный транспорт', value: 'vodnyy_transport' },
      { label: 'Запчасти и аксессуары', value: 'zapchasti_i_aksessuary' },
    ],
  },
  {
    label: 'Для дома и дачи',
    value: 'dlya_doma_i_dachi',
    options: [
      { label: 'Бытовая техника', value: 'bytovaya_tehnika' },
      { label: 'Мебель и интерьер', value: 'mebel_i_interer' },
      { label: 'Посуда и товары для кухни', value: 'posuda_i_tovary_dlya_kuhni' },
      { label: 'Продукты питания', value: 'produkty_pitaniya' },
      { label: 'Ремонт и строительство', value: 'remont_i_stroitelstvo' },
      { label: 'Растения', value: 'rasteniya' },
    ],
  },
  {
    label: 'Бытовая электроника',
    options: [
      { label: 'Аудио и видео', value: 'audio_i_video' },
      { label: 'Игры, приставки и программы', value: 'igry_pristavki_i_programmy' },
      { label: 'Настольные компьютеры', value: 'nastolnye_kompyutery' },
      { label: 'Ноутбуки', value: 'noutbuki' },
      { label: 'Оргтехника и расходники', value: 'orgtehnika_i_rashodniki' },
      { label: 'Планшеты и электронные книги', value: 'planshety_i_elektronnye_knigi' },
      { label: 'Телефоны', value: 'telefony' },
      { label: 'Товары для компьютера', value: 'tovary_dlya_kompyutera' },
      { label: 'Фототехника', value: 'fototehnika' },
    ],
  },
  {
    label: 'Хобби и отдых',
    options: [
      { label: 'Билеты и путешествия', value: 'bilety_i_puteshestviya' },
      { label: 'Велосипеды', value: 'velosipedy' },
      { label: 'Книги и журналы', value: 'knigi_i_zhurnaly' },
      { label: 'Коллекционирование', value: 'kollektsionirovanie' },
      { label: 'Музыкальные инструменты', value: 'muzykalnye_instrumenty' },
      { label: 'Охота и рыбалка', value: 'ohota_i_rybalka' },
      { label: 'Спорт и отдых', value: 'sport_i_otdyh' },
    ],
  },
  {
    label: 'Животные',
    options: [
      { label: 'Собаки', value: 'sobaki' },
      { label: 'Кошки', value: 'koshki' },
      { label: 'Птицы', value: 'ptitsy' },
      { label: 'Аквариум', value: 'akvarium' },
      { label: 'Другие животные', value: 'drugie_zhivotnye' },
      { label: 'Товары для животных', value: 'tovary_dlya_zhivotnyh' },
    ],
  },
];
export default categoryOptions;
