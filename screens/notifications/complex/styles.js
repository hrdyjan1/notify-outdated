import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: theme.sizes.base * 2,
  },
  top: {
    padding: 30,
  },
  middle: {
    padding: 10,
  },
  image: {
    width: theme.sizes.device.width - 10,
    height: '100%',
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: theme.colors.white,
  },
});

export default styles;
