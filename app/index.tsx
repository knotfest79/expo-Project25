import {View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login () {
  return (
    <SafeAreaView>
        <View>
            <Text>
                Login </Text>
            <Link href = "/">
            <Text>Go to Login</Text>
            </Link>
        </View>
    </SafeAreaView>
  )
}