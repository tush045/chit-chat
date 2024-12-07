import { Platform } from "react-native";

export const BASE_URL = Platform.OS ==='android' ? 'http://localhost:3000' : 'http://10.0.2.2:3000'
export const SOCKET_URL = Platform.OS ==='android' ? 'ws://10.0.2.2:3000' : 'ws://localhost:3000'


// https://localhost:3000/oauth/check-username