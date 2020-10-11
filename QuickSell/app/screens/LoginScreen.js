import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
            <AppFormField 
                icon="email"
                autoCapitalize="none"
                name="email"
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
            />

            <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock" 
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <SubmitButton 
                title="Login"
            />   
            </AppForm>
            

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
