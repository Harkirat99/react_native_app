import { View, Text, StatusBar, Platform,Image, Touchable, TouchableOpacity, ActivityIndicatorBase } from 'react-native'
import React, { FC, useState } from 'react'
import { useStyles } from 'react-native-unistyles'
import { loginStyles } from '@unistyles/authStyles'
import Animated from 'react-native-reanimated'
import CustomText from '@components/global/CustomText'
import BreakerText from '@components/ui/BreakerText'
import PhoneInput from '@components/ui/PhoneInput'
import SocialLogin from '@components/ui/SocialLogin'

const LoginScreen:FC = () => {

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { styles } = useStyles(loginStyles);

  const handleLogin = async() => {

  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image 
        source={require("@assets/images/login.png")}
        style={styles.cover}
      />
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.bottomContainer}
      >
        <CustomText
          fontFamily='Okra-Bold'
          variant='h2'
          style={styles.title}
        >
          India's #1 Food Delivery and Dining App
        </CustomText>
          <BreakerText text={"Log in or sign up"}/>

          <PhoneInput 
            onFocus={() => {}}
            onBlur={() => {}}   
            value={phone}   
            onChangeText={setPhone}   
          />

          <TouchableOpacity style={styles.buttonContainer} disabled={loading} onPress={handleLogin} activeOpacity={0.8}>
            {
              loading?
              <ActivityIndicatorBase  size="small" color="#fff"/>

              : 
              <CustomText color="#fff" fontFamily='Okra-Medium' variant="h5"> Continue </CustomText>
            }
          </TouchableOpacity>
          <BreakerText text="or"/>
          <SocialLogin />
      </Animated.ScrollView>

      <View style={styles.footer}>
        <CustomText>
            By contnuing, you agree to our
        </CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of Service</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen