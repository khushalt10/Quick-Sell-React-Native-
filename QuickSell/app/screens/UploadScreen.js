import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import AppText from '../components/Text'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'
import colors from '../config/colors'

export default function UploadScreen({progress = 0, visible = false, onDone}) {
    return (
        <Modal visible={visible}>
        <View style={styles.container}>
            {progress < 1 ? (
                <Progress.Bar progress={progress} width={200} color="dodgerblue" />
            ):(
                <LottieView onAnimationFinish={onDone} style={styles.animation} autoPlay loop={false} source={require('../assets/animations/done.json')} />
            )}
        </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
        flex: 1,
        justifyContent: "center"
    },
    animation: {
        width: 300,
        height: 300
    }
})
