import * as SecureStore from 'expo-secure-store'

const key = "authToken"

const storeToken = async(authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.log("error storing auth token ", error)
    }
}

const getToken = async() => {
    try {
        const authToken = await SecureStore.getItemAsync(key)
        return authToken
    } catch (error) {
        console.log("Error getting authToken, ", error)
    }
}

const removeToken = async() => {
    try {
        await SecureStore.deleteItemAsync(key)
        
    } catch (error) {
        console.log('Error removing auth token ', error)
    }
}

export default {
    storeToken,
    getToken,
    removeToken
}