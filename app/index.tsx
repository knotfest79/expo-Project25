import {View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function Login () {
  return (
    <View>
        <Text>
            Login </Text>
        <Link href = "/">
        <Text>Go to Login</Text>
        </Link>
    </View>
  )
}