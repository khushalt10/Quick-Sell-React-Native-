import { Formik } from 'formik'
import React, { Children } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        {() => (
            <>
                {children}
            </>
        )}
        </Formik>

    )
}

const styles = StyleSheet.create({})
