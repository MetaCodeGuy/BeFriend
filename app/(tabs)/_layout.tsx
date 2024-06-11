import { Tabs } from 'expo-router';
import React from 'react'; 
import {Platform} from 'react-native' 
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {Dimensions} from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const width =  Dimensions.get('window').width;
  return (
    <Tabs

      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarLabelStyle:{
          display:'none'
        },
        tabBarStyle:{
          height:60, 
          position:'absolute',
          bottom:20,  
          maxWidth:300,
          shadowColor:'black',
            left:'50%',
                 transform: [{translateX: Platform.OS == "web"?"-50%":-width/4}],
          shadowOffset:{ 
            width:0,
            height:4,
          },
          shadowOpacity:.2,
          shadowRadius:4,
          borderRadius:10, 
        }
      }}>
      <Tabs.Screen
      
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home-variant" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="heart" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addpost"
        options={{
          title: 'Create',
          tabBarItemStyle:{ 
          },
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="circle" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="square" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
