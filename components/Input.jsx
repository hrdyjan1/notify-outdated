/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import * as Icon from '@expo/vector-icons';

import Text from './Text';
import Block from './Block';
import Button from './Button';
import { theme } from '../constants';

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth + 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    height: theme.sizes.base * 3,
    paddingHorizontal: 15,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base,
    right: 0,
  },
});

const Input = (props) => {
  const [isToggleSecure, setToggleSecure] = React.useState(false);
  const toggleSecure = () => setToggleSecure((s) => !s);

  const renderLabel = () => {
    const { label } = props;

    return (
      <Block flex={false}>
        {label ? (
          <Text primary>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  };

  const renderError = () => {
    const { errorText } = props;

    return (
      <Block flex={false}>
        {errorText ? (
          <Text primary error>
            {errorText}
          </Text>
        ) : null}
      </Block>
    );
  };

  const renderToggle = () => {
    const { secure, rightLabel } = props;

    if (!secure) return null;

    return (
      <Button style={styles.toggle} onPress={toggleSecure}>
        {rightLabel || (
          <Icon.Ionicons
            color={theme.colors.gray}
            size={theme.sizes.font * 1.35}
            name={!isToggleSecure ? 'md-eye' : 'md-eye-off'}
          />
        )}
      </Button>
    );
  };

  const renderRight = () => {
    const { rightLabel, rightStyle, onRightPress } = props;

    if (!rightLabel) return null;

    return (
      <Button style={[styles.toggle, rightStyle]} onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  };

  const {
    email, phone, number, secure, errorText, style, ...others
  } = props;
  const isSecure = isToggleSecure ? false : secure;

  const inputStyles = [styles.input, errorText && { borderColor: theme.colors.red }, style];

  const phoneType = phone ? 'phone-pad' : 'default';
  const numberType = number ? 'numeric' : phoneType;
  const inputType = email ? 'email-address' : numberType;

  return (
    <Block flex={false} margin={[5, 0, theme.sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...others}
      />
      {renderToggle()}
      {renderRight()}
      {renderError()}
    </Block>
  );
};

export default Input;
