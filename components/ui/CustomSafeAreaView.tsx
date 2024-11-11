import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { Colors } from '@/utils/Constants'
import { SafeAreaView } from 'react-native-safe-area-context'


interface customProps {
  children: React.ReactNode
  style?: ViewStyle
}


const CustomSafeAreaView: FC<customProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary
  }
})

export default CustomSafeAreaView

