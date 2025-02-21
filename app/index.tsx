import {View, Text, TextInput, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Login () {
  return (
    <SafeAreaView>
        <View>
            <Text>
                Login </Text>
            <Link href = "/signup">
            <Text>Go to signup</Text>
            </Link>
        </View>
    </SafeAreaView>
  )
}