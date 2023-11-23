import { ThemeConfig } from 'antd/es/config-provider/context';
import light from '../tokens/light.json';
import dark from '../tokens/dark.json';

export type ThemeType = 'dark' | 'light';

const themeToken = light;

const componentsOverrides: ThemeConfig = {
  components: {
    Modal: {
      paddingContentHorizontal: themeToken?.paddingContentHorizontal,
      borderRadiusLG: 8,
    },
    Button: {
      fontFamily: 'SF Pro Text',
      paddingContentHorizontal: themeToken?.paddingContentHorizontal,
      colorBorder: themeToken?.['blue.5'],
      borderRadius: 16,
      borderRadiusSM: 16,
      borderRadiusLG: 20,
      colorLink: '#713EDD',
      fontSize: 14,
    },
    Card: {
      borderRadius: 16,
    },
    Tag: {
      borderRadius: 12,
    },
  },
};

/**
 * Создаем CSS переменные из выбранных токенов
 */
const syncCssVariables = (token: ThemeConfig['token']) => {
  const root = document.documentElement;

  if (!token) {
    throw new Error('theme token not set!');
  }

  Object.entries(token).forEach(([prop, value]) => {
    const propWithoutDots = prop.split('.').join('-');

    if (value) {
      root.style.setProperty(`--lms-${propWithoutDots}`, value as string);
    }
  });
};

const getTheme = (type: ThemeType) => {
  if (type === 'dark') {
    syncCssVariables(dark);

    return {
      ...componentsOverrides,
      token: {
        ...dark,
        fontFamily: 'SF Pro Text',
      },
    };
  }

  if (type === 'light') {
    syncCssVariables(light);

    return {
      ...componentsOverrides,
      token: {
        ...light,
        fontFamily: 'SF Pro Text',
      },
    };
  }

  return componentsOverrides;
};

export default getTheme;
