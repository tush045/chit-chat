import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='home' />
            <Stack.Screen name='Status' />
        </Stack>
    )
}

export default _layout