import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import userApi from '../api/users'
import authApi from '../api/auth'
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import useAuth from "../auth/useAuth";
import auth from "../api/auth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(userApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth()
  const [error, setError] = useState()

  const handleSubmit = async(userInfo) => {
    const res = await registerApi.request(userInfo)

    if(!res.ok) {
      if(res.data) setError(res.data.error)
      else {
        setError("An unexpected error occured.")
        console.log(res)
      }
      return
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    )
    auth.login(authToken)
  }

  return (
    <>
    <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
