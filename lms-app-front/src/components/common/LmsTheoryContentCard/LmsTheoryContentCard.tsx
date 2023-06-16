import React, {
  FC, useCallback, useMemo, useState,
} from 'react';
import {
  Button, Card, Space, Switch, Typography,
} from 'antd';
import { OutputData } from '@editorjs/editorjs';
import { computed } from 'mobx';
import { observer } from 'mobx-react-lite';
import FullScreen from '../FullScreenComponent/FullScreenComponent';
import useFullScreenHandle from '../FullScreenComponent/utils/useFullScreenHandle';
import ContentEditor from '../../editors/ContentEditor';
import useStore from '../../../domain/modelLayer/store/useStore';
import { RoleNamesEnum } from '../../../domain/types';
import LmsIntroActionCard from '../LmsIntroActionCard/LmsIntroActionCard';

const LmsTheoryContentCard: FC = () => {
  const { profileStore: { profile } } = useStore();
  const isStudent = useMemo(() => computed(() => profile?.role.name === RoleNamesEnum.Student), []).get();
  const [readOnly, setReadOnly] = useState(true);
  const [content, setContent] = useState<OutputData | undefined>({
    time: 1550476186479,
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Заголовок',
          level: 4,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'Конец XV — начало XVI в. — время образования централизованного Российского государства. Условия, в которых происходило образование государства, были не совсем благоприятными. Преобладал резко континентальный климат и очень короткое сельскохозяйственное лето. Плодородные земли Дикого поля (юг), Поволжья и Южной Сибири еще не были освоены. Отсутствовали выходы к морям. Вероятность внешней агрессии была высокой, что требовало постоянного напряжения сил.',
        },
      },
      {
        type: 'video',
        data: {
          link: 'https://video.lms.el.school/hls/515d160c-037d-4465-a852-a4141a91d233.mp4/index-v1-a1.m3u8',
          title: '"Волшебное кольцо" Автор: коллектив ФКОУ В(С)ОШ ГУФСИН России по Иркутской области.',
          withBorder: false,
          withBackground: false,
          stretched: true,
        },
      },
      {
        type: 'header',
        data: {
          text: 'Заголовок',
          level: 4,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'Многие территории бывшей Киевской Руси входили в состав других государств, а это означало, что традиционные связи — торговые и культурные — были нарушены.\n'
            + 'За вторую половину XVI в. территория России удвоилась по сравнению с серединой века. Если в начале XVI в. в России проживало 6 млн человек, то в конце XVI в. — уже 9 млн человек. Население было многонациональным. Основная часть населения проживала на северо-западе (Новгород) и в центре страны (Москва). Но даже в самых густонаселенных местах плотность населения оставалась низкой — до 5 человек на 1 кв. м (для сравнения, в Европе — 10–30 человек на 1 кв. м).',
        },
      },
      {
        type: 'linkTool',
        data: {
          link: 'https://editorjs.io/',
          text: 'editorjs official',
        },
      },
      {
        type: 'attaches',
        data: {
          file: {
            url: 'https://s3.lms.el.school/lms/attachments/a94b1c2b-1f95-4e01-a558-4670f8dfd886.pdf',
            size: 12474244,
            name: 'hero.jpg',
            extension: 'pdf',
          },
          title: 'Как Петр окно в Европу прорубил.pdf',
        },
      },
      {
        type: 'image',
        data: {
          file: {
            url: 'https://obrazovaka.ru/wp-content/uploads/2019/12/barschina-e1577591023351.png',
          },
          caption: 'Картинка 1. Иллюстрация к тексту',
          withBorder: false,
          withBackground: false,
          stretched: true,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'Наиболее распространенной озимой культурой стала рожь, а яровые поля засевали овсом, довольно широко распространились посевы питательной гречихой. Обрабатывалась земля при помощи сохи, сохи-косули, плуга, бороны.',
        },
      },
    ],
    version: '2.8.1',
  });
  const handle = useFullScreenHandle();
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(true);
  const changeFullScreenMode = useCallback(() => setFullScreenMode((prev) => !prev), []);

  return (
    <FullScreen handle={handle} onChange={changeFullScreenMode}>
      <Card
        className="max-w-[856px] w-full rounded-[16px] bg-[#FFF]"
        title="Теория"
        extra={(
          fullScreenMode && (
          <Space>
            {!isStudent && (
              <>
                <Typography.Text>Режим только чтение</Typography.Text>
                <Switch checked={readOnly} onChange={setReadOnly} />
              </>
            )}
            {readOnly && (<Button type="link" onClick={handle.enter}>Полноэкранный режим</Button>)}
          </Space>
          ))}
      >
        <ContentEditor
          value={content}
          onChange={setContent}
          readOnly={readOnly}
        />
      </Card>
      <LmsIntroActionCard
        cardTitle="Тест"
        cardText="Нарисуй схему крестьянского двора и расположи там все объекты сельского хозяйства, которые знаешьеке?"
        buttonText="Пройти!"
        progressStep="Теория"
        whatNext
        fullScreenMode={fullScreenMode}
      />
    </FullScreen>
  );
};

export default observer(LmsTheoryContentCard);
