import { checkValidation } from '../../../helpers/func';
import { theme } from '../../../constants';

const notificationInitialState = {
  text: { notification: '', error: '', button: 'Create' },
  status: 'IDLE',
  valid: false,
};

function notificationReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT': {
      const { text } = action.payload;
      return {
        ...state,
        text: { button: 'Create', error: '', notification: text },
        valid: checkValidation(text),
      };
    }
    case 'CREATE':
      return {
        ...state,
        status: 'CREATING',
        text: {
          ...state.text,
          title: 'Preparing ...',
          subtitle: '',
          button: 'Creating',
        },
        icon: {
          name: 'hourglass-2',
          backgroundColor: theme.colors.secondary,
        },
      };
    case 'INVALID':
      return { ...state, valid: false, text: { ...state.text, error: action.payload.text } };
    case 'CREATE_SUCCESS':
      return {
        ...state,
        status: 'CREATED_SUCCESS',
        text: {
          ...state.text,
          button: 'Home',
          title: 'Hurray!',
          subtitle: 'You successfully created Quick notification: ',
        },
        icon: {
          name: 'check',
          backgroundColor: theme.colors.green,
        },
      };
    case 'CREATE_FAILURE':
      return { ...state, status: 'CREATED_FAIL', text: { ...state.text, error: 'Created Fail' } };
    default:
      throw new Error();
  }
}

export { notificationInitialState, notificationReducer };
