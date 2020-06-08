import { StyleSheet } from 'react-native';
import { theme } from '../../../../constants';

const styles = StyleSheet.create({
  button: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    paddingVertical: 2,
    color: theme.colors.primary,
    fontFamily: 'CarterOne-Regular',
    fontSize: 13,
    textAlignVertical: 'center',
  },
});

export default styles;
