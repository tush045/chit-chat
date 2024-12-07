import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { router } from 'expo-router'
import { signupStyles } from '@/styles/signupStyles'
import { launchGallery } from '@/utils/LibraryHelpers'
import CustomText from '@/components/ui/CustomText'
import { uploadFile } from '@/service/api/fileService'
import { checkUserName, signUpWithGoogle } from '@/service/api/authServices'
import CustomInput from '@/components/ui/CustomInput'

const signup = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLasttName] = useState('')
  const [profilePic,setProfilePic] = useState('')
  const [username,setUserame] = useState('')
  const [loading,setLoading] = useState(false)

  const handleImagePick = async () => {
    const response = await launchGallery();
    if (response) {
      setProfilePic(response)
    }
  }
  const createAccount = async () => {
    if(!username || !firstName || !lastName ||!profilePic){
      Alert.alert("error", "please fill all the details")
      return;
    }
    setLoading(true)
    try {
      const mediaurl = uploadFile(profilePic)
      await signUpWithGoogle({
        user_name:username,
        last_name:lastName,
        profile_picture:mediaurl,
        firsst_name:firstName,
      })
    } catch (error) {
      
    }finally{
      setLoading(false)
    }
  }
  const validateUsername = async(name:String) =>{
    if (name.length>4) {
      const isValid = await checkUserName(name)
      return isValid
    }
    return false
  }


  return (
    <CustomSafeAreaView style={signupStyles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='arrow-back-outline' size={RFValue(20)} color='#fff'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleImagePick} style={signupStyles.cameraIcon}>
        {
          profilePic.uri ?
          <Image source={{uri:profilePic.uri}} style={signupStyles.cameraIcon}/>
          :
          <MaterialCommunityIcons name='camera-plus' size={RFValue(18)} color='#fff'/>
        }
      </TouchableOpacity>
      <CustomText variant='h4' style={signupStyles.profileText}>Profile info</CustomText>
      <CustomText variant='h4' style={signupStyles.instructions}>Enter your username, name , and add profile photo</CustomText>

      <CustomInput
      label='UserName'
      value={username}
      onChangeText={setUserame}
      showValidationIcon
      validationFunction={validateUsername}/>
      <CustomInput
      label='First Name'
      value={firstName}
      onChangeText={setFirstName}/>
      <CustomInput
      label='Last Name'
      value={lastName}
      onChangeText={setLasttName}/>


      <View style={signupStyles.footer}>
        <CustomText style={signupStyles.termsText}>By signing up, you agree to our terms and conditions</CustomText>
        <TouchableOpacity style={signupStyles.submitButton} onPress={createAccount}>
          {
            !loading?
            <MaterialCommunityIcons name='arrow-right' size={RFValue(24)} color='#fff'/>:
            <ActivityIndicator color='#fff' size='small'/>
          }
        </TouchableOpacity>
      </View>
    </CustomSafeAreaView>
  )
}

export default signup