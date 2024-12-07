import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import LottieView from 'lottie-react-native'
import { siginStyles } from '@/styles/signinStyles'
import CustomText from '@/components/ui/CustomText'
import { signinWithGoogle } from '@/service/api/authServices'




const signin = () => {
  const handleSignin = async()=>{
    await signinWithGoogle()
    
  }
  return (
    <CustomSafeAreaView style={siginStyles.container}>
      {/* <LottieView
        autoPlay
        loop
        style={siginStyles.animation}
        source={require('@/assets/animations/telegram.json')}
      /> */}
      <Image source={require('@/assets/images/ChitChat-logo.png')} style={siginStyles.animation}  />
    <CustomText variant='h3' style={siginStyles.title}>Welcome To Chit Chat</CustomText>
    <CustomText style={[siginStyles.message]}>Messages are heavily encrypted and can sef-destruct.</CustomText>
    <TouchableOpacity style={siginStyles.loginBtn} onPress={handleSignin}>
      <Image source={require('@/assets/icons/google.png')} style={siginStyles.googleIcon}/>
      <CustomText style={siginStyles.loginBtnText}>Login with Google</CustomText>
    </TouchableOpacity>

    </CustomSafeAreaView>
  )
}

export default signin
