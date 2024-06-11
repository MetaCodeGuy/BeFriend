import {   View, SafeAreaView, StyleSheet, Platform, Text, TouchableOpacity, ScrollView, useColorScheme, Button } from 'react-native';
import {Image} from 'expo-image'
import {Stories} from '@/helpers/DataHub.js'
import { Link, router } from 'expo-router'
import { Entypo, Feather, Octicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import FeedCard from '@/components/FeedCard';  
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
export default function HomeScreen() {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white"
    }}>
      <ScrollView showsVerticalScrollIndicator={false} 
      style={{ backgroundColor:  Colors[colorScheme ?? 'light'].background,
      // maxWidth:800,
      alignSelf:'center'
      }}> 
        {/* Header  */}
        <StatusBar style='dark' />
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          marginTop: 20,
          paddingVertical: 20,
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Image
              source={ 
'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Felon-musk-8.jpg&f=1&nofb=1&ipt=a98a117d6c8374f554c1619ff1b615a57abdc5b45fcd1f72bf97152ea26916ee&ipo=images' }
              style={{
                borderRadius: 30,
                width: 60,
                height: 60,
              }}

            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: 'poppinsbold', fontSize: 18 }}>What's Up Nithish?</Text>
              <Text style={{ fontFamily: 'poppinsreg', fontSize: 14, color: 'gray' }}>Have a great day!</Text>
            </View>
          </View>
          {/* Icons */}
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-evenly"
          }}>
            <TouchableOpacity
              onPress={() => {
                router.push("Onboard")
              }}
              style={{
                borderRadius: 10,
                backgroundColor: '#9bdb4d',
                padding: 10,
                marginHorizontal: 10,
              }}>
              <Octicons name="plus" size={22} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 10 }}>
              <Octicons name="bell-fill" size={22} color={"#9bdb4d"} />
            </TouchableOpacity>
          </View>

        </View>


        {/* Stories */}

        <Text style={{ marginHorizontal: 10, fontFamily: 'poppinsreg', fontSize: 16 }}>Stories</Text>
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}

          style={{
            marginTop: 10,
            maxHeight: 100,
          }}>
          {
            Stories.map((img) => {
              return <TouchableOpacity style={{
                marginLeft: 20,
                borderWidth: 2,
                borderColor:'#9bdb4d',
                borderRadius: 60
              }}>
                <Image
                source={img}
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                />
              </TouchableOpacity>
            })
          }
        </ScrollView>
 
        {/* Image Feeds  */}
        <Text style={{ marginHorizontal: 10, marginTop: 20, marginBottom: 5, fontFamily: 'poppinsreg', fontSize: 16 }}>Image Feeds</Text>

        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
