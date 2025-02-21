import {View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function SignUp () {
  return (
    <View>
        <Text>
            Sign up
        </Text>
         <Link href = "/signup">
                <Text>Go to Sign up</Text>
                </Link>
    </View>
  )
}