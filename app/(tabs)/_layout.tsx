import { Tabs } from 'expo-router';
import React from 'react'; 
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs

      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarLabelStyle:{
          display:'none'
        },
        tabBarStyle:{
          // height:60, 
          // position:'absolute',
          // // bottom:20, 
          // marginHorizontal:50, 
          // shadowColor:'black',
          // shadowOffset:{
          //   width:0,
          //   height:4,
          // },
          // shadowOpacity:.2,
          // shadowRadius:4,
          // borderRadius:10, 
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
        name="liked"
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
