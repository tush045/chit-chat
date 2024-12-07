import { resetAndNavigate } from '@/utils/LibraryHelpers'
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin'
// import axios from 'axios'
import { BASE_URL } from '../sockets/config'
import { tokenStorage } from '../sockets/storage'
import { useAuthStore } from '../sockets/authStore'
import axios from 'axios'



export const signinWithGoogle = async () =>{
    GoogleSignin.configure({
        webClientId:'336860720292-bq0vqcsq5m63m7h8uh18757allqq3r53.apps.googleusercontent.com',
        // androidClientId:"336860720292-bq0vqcsq5m63m7h8uh18757allqq3r53.apps.googleusercontent.com",
        forceCodeForRefreshToken:true,
        offlineAccess:false,
        
    });
    try {
        await GoogleSignin.hasPlayServices()
        await GoogleSignin.signOut()

        const res = await GoogleSignin.signIn()
        const apiRes = await axios.post("192.168.1.1:3000/oauth/login",{
            id_token: res.data?.idToken
        })


        const {tokens,user} = apiRes.data

        tokenStorage.set('accessToken',tokens?.accessToken)
        tokenStorage.set('refreshToken',tokens?.refreshToken)

        const {setUser} = useAuthStore.getState()
        setUser(user)
        console.log(user)
        
        resetAndNavigate('/(home)/home')

    } catch (error:any) {
        console.log(error)
        resetAndNavigate('/(auth)/signup')
        // if (error =='DEVELOPER_ERROR') {
        //     resetAndNavigate('/(auth)/signup')
        // }
    }
}

export const signUpWithGoogle = async (data:any) =>{
    GoogleSignin.configure({
        webClientId:'336860720292-bq0vqcsq5m63m7h8uh18757allqq3r53.apps.googleusercontent.com',
        // androidClientId:"336860720292-bq0vqcsq5m63m7h8uh18757allqq3r53.apps.googleusercontent.com",
        forceCodeForRefreshToken:true,
        offlineAccess:false,
        
    });
    try {
        await GoogleSignin.hasPlayServices()
        await GoogleSignin.signOut()

        const res = await GoogleSignin.signIn()
        const apiRes = await axios.post("192.168.1.1:3000/oauth/login",{
            id_token: res.data?.idToken,
            ...data
        })


        const {tokens,user} = apiRes.data

        tokenStorage.set('accessToken',tokens?.accessToken)
        tokenStorage.set('refreshToken',tokens?.refreshToken)

        const {setUser} = useAuthStore.getState()
        setUser(user)
        console.log(user)
        
        resetAndNavigate('/(home)/home')

    } catch (error:any) {
        console.log("error in signup",error)
    }
}

export const checkUserName = async (username:String) => {
    try {
        const apiRes = await axios.post("192.168.1.1:3000/oauth/check-username",{
            username
         });
         return apiRes.data?.available
    } catch (error) {
        console.log('checkUsername',error);
        return false
    }
}