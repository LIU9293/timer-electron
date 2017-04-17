import { xiaozusai } from 'config/rules';

const PlayerInfoInit = {
  positive: {
    name: '',
    title: '',
    image: '',
    player: 0,
  },
  negative: {
    name: '',
    title: '',
    image: '',
    player: 0,
  },
};

export const PlayerInfo = (state = PlayerInfoInit, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYER_INFO':
      return {
        positive: {
          ...state.positive,
          ...action.positive,
        },
        negative: {
          ...state.negative,
          ...action.negative,
        }
      };
    default:
      return state;
  }
};

export const Sections = (state = xiaozusai, action) => {
  switch (action.type) {
    case 'UPDATE_SECTIONS':
      return action.sections;
    default:
      return state;
  }
};
