import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { splashStyles } from '../styles/splashStyles'
import {resetAndNavigate} from '../utils/LibraryHelpers'

const index = () => {

  useEffect(() => {
    setTimeout(() => {
      resetAndNavigate('/(auth)/signin');
    }, 100);

  }, [])



  return (

    <View style={splashStyles.container}>
      <Image source={require('../assets/images/ChitChat-logo.png')} style={splashStyles.logo} />
    </View>

  )
}

export default index