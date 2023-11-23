import React from 'react';
import { useLocation } from 'react-router';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

import {
  ABOUT_PAGE,
  DISCIPLINES, FEEDBACK_PAGE, INSTRUCTION_PAGE, LAW_PAGE,
  LESSON_DEMO,
  LESSONS,
  MODULES, PARSER_PAGE, PARSING_EXAMPLE_PAGE,
  THEMES,
  USERS,
} from '../../routes';
import { RoleNamesEnum } from '../../domain/types';

const adminMenuItems: MenuProps['items'] = [
  {
    key: USERS,
    label: (<Link to={USERS}>Пользователи</Link>),
  },
  {
    key: DISCIPLINES,
    label: (<Link to={DISCIPLINES}>Дисциплины</Link>),
  },
  {
    key: MODULES,
    label: (<Link to={MODULES}>Модули</Link>),
  },
  {
    key: THEMES,
    label: (<Link to={THEMES}>Темы</Link>),
  },
  {
    key: LESSONS,
    label: (<Link to={LESSONS}>Уроки</Link>),
  },
  {
    key: LESSON_DEMO,
    label: (<Link to={LESSON_DEMO}>Демо урока</Link>),
  },
];

const clientMenuItems: MenuProps['items'] = [
  {
    key: ABOUT_PAGE,
    label: (<Link to={ABOUT_PAGE}>О нас</Link>),
  },
  {
    key: LAW_PAGE,
    label: (<Link to={LAW_PAGE}>Закон и парсинг</Link>),
  },
  {
    key: FEEDBACK_PAGE,
    label: (<Link to={FEEDBACK_PAGE}>Обратная связь</Link>),
  },
  {
    key: PARSER_PAGE,
    label: (<Link to={PARSER_PAGE}>Демо парсер</Link>),
  },
  {
    key: INSTRUCTION_PAGE,
    label: (<Link to={INSTRUCTION_PAGE}>Инструкции</Link>),
  },
  {
    key: PARSING_EXAMPLE_PAGE,
    label: (<Link to={PARSING_EXAMPLE_PAGE}>Примеры парсинга</Link>),
  },
];

const guestMenuItems: MenuProps['items'] = [
  {
    key: ABOUT_PAGE,
    label: (<Link to={ABOUT_PAGE}>О нас</Link>),
  },
  {
    key: LAW_PAGE,
    label: (<Link to={LAW_PAGE}>Закон и парсинг</Link>),
  },
  {
    key: FEEDBACK_PAGE,
    label: (<Link to={FEEDBACK_PAGE}>Обратная связь</Link>),
  },
  {
    key: PARSER_PAGE,
    label: (<Link to={PARSER_PAGE}>Демо парсер</Link>),
  },
  {
    key: INSTRUCTION_PAGE,
    label: (<Link to={INSTRUCTION_PAGE}>Инструкции</Link>),
  },
  {
    key: PARSING_EXAMPLE_PAGE,
    label: (<Link to={PARSING_EXAMPLE_PAGE}>Примеры парсинга</Link>),
  },
];

const useSideBarMenu = (roleName: RoleNamesEnum) => {
  const location = useLocation();

  if (roleName === RoleNamesEnum.Administrator) {
    const selectedKeys = [
      USERS,
      LESSON_DEMO,
      DISCIPLINES,
      MODULES,
      THEMES,
      LESSONS,
    ].filter((key) => location.pathname.search(key) > -1);

    return {
      items: adminMenuItems,
      selectedKeys,
    } as const;
  }

  if (roleName === RoleNamesEnum.Client) {
    const selectedKeys = [
      ABOUT_PAGE,
      LAW_PAGE,
      FEEDBACK_PAGE,
      PARSER_PAGE,
      INSTRUCTION_PAGE,
      PARSING_EXAMPLE_PAGE,
    ].filter((key) => location.pathname.search(key) > -1);

    return {
      items: clientMenuItems,
      selectedKeys,
    } as const;
  }

  if (roleName === RoleNamesEnum.Guest) {
    const selectedKeys = [
      ABOUT_PAGE,
      LAW_PAGE,
      FEEDBACK_PAGE,
      PARSER_PAGE,
      INSTRUCTION_PAGE,
      PARSING_EXAMPLE_PAGE,
    ].filter((key) => location.pathname.search(key) > -1);

    return {
      items: guestMenuItems,
      selectedKeys,
    } as const;
  }

  return {
    items: undefined,
    selectedKeys: undefined,
  } as const;
};

export default useSideBarMenu;
