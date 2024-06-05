import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, Feather, FontAwesome, Ionicons, Octicons } from '@expo/vector-icons'

export default function profile() {
  return (
    <SafeAreaView style={{
      backgroundColor:'white'
    }}>
      {/* Links */}
      <View
      style={{
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignItems:'center', 
      }}
      >
        <TouchableOpacity style={{
        }}>
          <Ionicons name="arrow-back" size={24} color={"black"} />
        </TouchableOpacity>
        <Text style={{fontFamily:'poppinsreg',fontSize:16}}>My Profile</Text>
        <TouchableOpacity style={{
        }}>
          <Feather name="settings" size={24} color={"#9bdb4d"} />
        </TouchableOpacity>
      </View>

{/* Profile Picture */}

<Image
source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Felon-musk-8.jpg&f=1&nofb=1&ipt=a98a117d6c8374f554c1619ff1b615a57abdc5b45fcd1f72bf97152ea26916ee&ipo=images' }}
style={{
  width:150,
  marginTop:20,
  alignSelf:'center',
  height:150,
  borderRadius:150,
}}
/>

<Text style={{fontFamily:'poppinsreg',textAlign:'center',fontSize:16,marginTop:15}}>Nithish</Text>
<Text style={{fontFamily:'poppinsreg',color:'gray',textAlign:'center',fontSize:14}}>@nithish876876</Text>


{/* infotics */}

<View style={{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  marginTop:20,
  justifyContent:'space-evenly',
  paddingHorizontal:10
}}>
  <View style={{
    
  }}>
    <Text style={{fontFamily:'poppinsreg',fontSize:16,color:'gray',textAlign:'center'}}>Post</Text>
    <Text style={{fontFamily:'poppinsbold',fontSize:18,textAlign:'center'}}>26</Text>
  </View>
  <View style={{
    
  }}>
    <Text style={{fontFamily:'poppinsreg',fontSize:16,color:'gray',textAlign:'center'}}>Followers</Text>
    <Text style={{fontFamily:'poppinsbold',fontSize:18,textAlign:'center'}}>2.4B</Text>
  </View>
  <View style={{
    
  }}>
    <Text style={{fontFamily:'poppinsreg',fontSize:16,color:'gray',textAlign:'center'}}>Follows</Text>
    <Text style={{fontFamily:'poppinsbold',fontSize:18,textAlign:'center'}}>10</Text>
  </View>
</View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})