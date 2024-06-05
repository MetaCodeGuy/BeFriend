import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons'

const FeedCard = () => {
    return (
        <View style={{
            width: '95%',
            height: "auto",
            minHeight: 350,
            maxHeight: 400,
            elevation: 6,
            alignSelf: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
            shadowColor: 'black',
            marginBottom: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowOpacity: .2,
            shadowRadius: 8
        }}>
            {/* post image */}
            <View style={{
                width: "100%",
                height: '80%',
            }}>
                <Image
                    source={{ uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fjontotheworld.com%2Fwp-content%2Fuploads%2F2015%2F03%2Flarsian-cebu.jpg&f=1&nofb=1&ipt=2c89e72ea96c6ccf0bb8ebe4a26814f1e1a4e5ee50418fc97ff7a2df5a30df78&ipo=images" }}
                    style={{
                        width: "100%",
                        height: '90%',
                        borderRadius: 10
                    }}
                    resizeMode='cover'
                />
                <Text style={{ fontFamily: 'poppinsbold', fontSize: 16, paddingVertical: 10 }}>Japaneese Fried Chicken</Text>
            </View>

            {/* Info and actions */}

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                {/* profile pic and name */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image
                        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.files.bbci.co.uk%2FD26F%2Fproduction%2F_127817835_musk_sq_1.png&f=1&nofb=1&ipt=1684484ec321bb1c2a6ee4927cd39e6d8173770308a465300e792d82b7283897&ipo=images' }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,

                        }}
                    />
                    <View style={{ marginLeft: 5, alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'poppinsbold', fontSize: 14 }}>Elon Musk</Text>
                        <Text style={{ fontFamily: "poppinsreg", color: 'gray', fontSize: 14 }}>20 minutes ago</Text>

                    </View>
                </View>
                {/* Heart icon */}
                <TouchableOpacity style={{
                    borderRadius: 10,
                    backgroundColor:'white',
                    elevation:4,
                    padding: 16 ,
                    shadowOffset: {
                        width: 0,
                        height: 0
                    },
                    shadowOpacity: .2,
                    shadowRadius: 4,
                }}>
                    <AntDesign name="heart" size={24} color="#9bdb4d" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FeedCard