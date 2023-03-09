import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "My favorites",
        icon: "my_favorites",
        navigate: "Favorite",
        focus: true
    },
    {
        id: 1,
        name: "Wallets",
        icon: "wallets",
        navigate: "Wallets",
        focus: false
    },
    {
        id: 2,
        name: "My orders",
        icon: "my_order",
        navigate: "Order",
        focus: false
    },
    {
        id: 3,
        name: "About us",
        icon: "about_us",
        navigate: null,
        focus: false
    },
    {
        id: 4,
        name: "Privacy policy",
        icon: "privacy_policy",
        navigate: null,
        focus: false
    },
    {
        id: 5,
        name: "Settings",
        icon: "settings",
        navigate: "Settings",
        focus: false
    },
    {
        id: 6,
        name: "Log out",
        icon: "log_out",
        navigate: "Login",
        focus: false
    },
]

export default function MyCustomDrawer({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={()=>navigation.navigate("Account")}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={styles.info}>
                    <Text style={styles.name}>Alex Nikiforov</Text>
                    <Text style={styles.job}>Fashion Designer</Text>
                </View>
                <View style={styles.right_arrow}>
                    {Icons.Icons({ name: "arrow_right_black", height: 16, width: 12 })}
                </View>
            </TouchableOpacity>
            {data.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={[styles.item, {
                        marginTop: index === data.length - 1 ? 50 : 0,
                        backgroundColor: item.focus ? Colors.white : Colors.transparent,
                    }]}
                        onPress={() => item.navigate ? navigation.navigate(item.navigate) : null}
                    >
                        {Icons.Icons({ name: item.icon, height: 24, width: 27 })}
                        <Text style={[styles.item_name, {
                            fontWeight: item.focus ? '600' : '300'
                        }]}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
            <View style={styles.logo}>
                {Icons.Icons({ name: 'logo', height: 60, width: 52 })}
            </View>
        </View>
    )
}