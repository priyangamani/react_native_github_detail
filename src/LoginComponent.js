import React, {useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../src/components/Button';
import TextInput from '../src/components/TextInput';
import { emailValidator, passwordValidator } from './core/utils';
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from './action'
import get from 'lodash/get';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const dispatch = useDispatch();
  const data = useSelector(state => state.loginReducer)
  console.log("data", data);

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    dispatch(loginAction(email))
    navigation.navigate('RepoListComponent');
  };
  useEffect(() => {
    const dataItem = get(data, 'isLoggedin', false);
    if (dataItem) {
      navigation.navigate('RepoListComponent');
    }
  }, []);



  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;