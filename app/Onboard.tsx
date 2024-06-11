import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import react from 'react'
import { View, SafeAreaView, Image, Text, TouchableOpacity, StyleSheet } from "react-native"

const Onboarding = () => {
    return (
        <SafeAreaView style={{
            flex: 1, padding: 10,
            flexDirection: 'column', display: 'flex',
            backgroundColor: '#9bdb4d', justifyContent: "center", alignItems: "center"
        }}>
            <Image
                source={require('../assets/images/onboardbg-image.png')}
                style={{
                    width: "100%",
                    maxHeight: 350,
                }}
                resizeMode="contain"
            />
            <Text style={{ fontFamily: "poppinsbold", fontSize: 24, textAlign: 'center',
             marginVertical: 20 }}>{`Lets Be Friends With\nbefriend`}</Text>
            <View style={{width:'100%',maxWidth:500,alignSelf:'center',justifySelf:'center'}}>
            <TouchableOpacity
                onPress={() => {
                    router.push("(tabs)")
                }}
                style={{
                    padding: 10,
                    backgroundColor: "white",
                    borderRadius: 50,
                    width: '100%',
                    //marginHorizontal: 10,
                }}
            >
                <Text style={{ textAlign: 'center', fontFamily: 'poppinsreg', fontSize: 14 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: '#000',
                    borderRadius: 50,
                    width: '100%',
                    marginVertical: 10,
                    //marginHorizontal: 10,
                }}
            >
                <Text style={{
                    textAlign: 'center',
                    fontFamily: 'poppinsreg', color: "white", fontSize: 14
                }}>Sign up</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding

const Styels = StyleSheet.create({

})
