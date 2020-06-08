import { StyleSheet } from 'react-native';
import { theme } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    padding: 0,
  },
  image: {
    width: theme.sizes.device.width - 50,
    height: '80%',
    resizeMode: 'contain',
  },
  //   inner: {
  //     padding: 24,
  //     flex: 1,
  //     justifyContent: 'space-around',
  //   },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  input: {
    backgroundColor: theme.colors.white,
  },
});

export default styles;
