import {View, Text,TextInput, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignUp () {
  return (
    <SafeAreaView style = {styles.container}>
        <View >
            <Text style ={styles.title}>
                Sign up
            </Text>
             <Link href = "/">
                    <Text>Go to Sign up</Text>
                    </Link>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDE59"
    },
    form: {
        marginTop : 50,
    },
    title: {
        fontSize: 32,
        textAlign: "center"
    }


})