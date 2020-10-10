import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'
import ErrorMessage from '../components/ErrorMessage'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
             <AppTextInput 
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                textContentType="emailAddress"
                onBlur={() => setFieldTouched("email")}
            />
            <ErrorMessage error={errors.email} visible={touched.emai} />
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton 
                title="Login"
                onPress={handleSubmit}
            />                   
                    </>
                ) }
            </Formik>
            

        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 50
    },
    container: {
        padding: 10
    }
})
