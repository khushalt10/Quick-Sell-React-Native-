import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../AppTextInput'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({name, width,  ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

    return (
        <>
         <AppTextInput 
                onChangeText={handleChange(name)}
                {...otherProps}
                onBlur={() => setFieldTouched(name)}
                
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
