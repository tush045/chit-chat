import {useFonts} from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import {Colors} from '../utils/Constants'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const {loaded} = useFonts({
        SpaceMemo: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })
    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded])
    // if (!loaded) {
    //     return null
    // }

    return (
        <>
            <StatusBar style='light' backgroundColor={Colors.tertiary} translucent />
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name='index'/>
                <Stack.Screen name='(auth)'/>
            </Stack>
        </>
    )
    
}