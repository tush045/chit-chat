import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { FC } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'


interface Props {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    style: TextStyle | TextStyle[]
    numberOfLines?: any
    children: React.ReactNode
}

const CustomText: FC<Props> = ({ variant, style, numberOfLines, children }) => {
    let computedFontSize = RFValue(12)
    switch (variant) {
        case 'h1':
            computedFontSize = RFValue(24)
            break;
        case 'h2':
            computedFontSize = RFValue(22)
            break;
        case 'h3':
            computedFontSize = RFValue(20)
            break;
        case 'h4':
            computedFontSize = RFValue(18)
            break;
        case 'h5':
            computedFontSize = RFValue(16)
            break;
        case 'h6':
            computedFontSize = RFValue(14)
            break;
        default:
            computedFontSize =RFValue(12)
            break;
    }
    return (
        <Text style={{
            fontSize:computedFontSize,
            ...styles.text,
            ...style
        }}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    text:{
        color:"white",
        textAlign:'center'
    }
})
export default CustomText
