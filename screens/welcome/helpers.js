/* eslint-disable react/jsx-filename-extension */
import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const ITEM_WIDTH = theme.sizes.device.width;
const PRIMARY_COLOR = theme.colors.primary;

export const keyExtractor = (item) => item.key;
export const getItemLayout = (_, index) => ({
  length: ITEM_WIDTH,
  offset: ITEM_WIDTH * index,
  index,
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
  },
  screen: {
    width: ITEM_WIDTH,
    paddingHorizontal: theme.sizes.base * 2,
  },
});

const INITIAL_SCREEN_STATE = {
  WELCOME: {
    SCROLL_INDEX: 1,
    DOTS: [
      { borderColor: PRIMARY_COLOR },
      { color: PRIMARY_COLOR },
      { borderColor: PRIMARY_COLOR },
    ],
    LEFT: {
      index: 0,
      text: 'Why',
      icon: {
        name: 'ios-arrow-back',
        position: 'LEFT',
      },
    },
    RIGHT: {
      index: 2,
      text: 'How',
      icon: {
        name: 'ios-arrow-forward',
        position: 'RIGHT',
      },
    },
  },
  WHY: {
    SCROLL_INDEX: 0,
    DOTS: [
      { color: PRIMARY_COLOR },
      { borderColor: PRIMARY_COLOR },
      { borderColor: PRIMARY_COLOR },
    ],
    RIGHT: {
      index: 1,
      text: 'Back',
      icon: {
        name: 'ios-arrow-forward',
        position: 'RIGHT',
      },
    },
  },
  HOW: {
    SCROLL_INDEX: 2,
    DOTS: [
      { borderColor: PRIMARY_COLOR },
      { borderColor: PRIMARY_COLOR },
      { color: PRIMARY_COLOR },
    ],
    LEFT: {
      index: 1,
      text: 'Back',
      icon: {
        name: 'ios-arrow-back',
        position: 'LEFT',
      },
    },
  },
};

export const initialState = {
  ...INITIAL_SCREEN_STATE.WELCOME,
};

export const reducer = (_, action) => {
  switch (action.index) {
    case 0: {
      return INITIAL_SCREEN_STATE.WHY;
    }
    case 1: {
      return INITIAL_SCREEN_STATE.WELCOME;
    }
    case 2: {
      return INITIAL_SCREEN_STATE.HOW;
    }
    default:
      throw new Error(action);
  }
};

export const SCREEN_DATA = [
  { key: '1590742869959', index: 0 },
  { key: '1590742869960', index: 1 },
  { key: '1590742869961', index: 2 },
];

export default {
  styles,
  keyExtractor,
  SCREEN_DATA,
  ITEM_WIDTH,
  getItemLayout,
  initialState,
  reducer,
};
