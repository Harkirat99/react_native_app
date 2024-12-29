import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { useStyles } from 'react-native-unistyles'
import { phoneStyles } from '@unistyles/phoneStyles'
import Icon from "@components/global/Icon"
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SocialLogin:FC = () => {
  
  const { styles } = useStyles(phoneStyles);

    return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require("@assets/icons/google.png")} style={styles.gimg}/>
      </TouchableOpacity>
    </View>
  )
}

export default SocialLogin