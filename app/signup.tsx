import {View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp () {
  return (
    <SafeAreaView>
        <View>
            <Text>
                Sign up
            </Text>
             <Link href = "/signup">
                    <Text>Go to Sign up</Text>
                    </Link>
        </View>
    </SafeAreaView>
  )
}