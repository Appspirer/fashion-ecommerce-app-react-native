import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Progress order",
        icon: "Bag",
        details: "10+"
    },
    {
        id: 1,
        name: "Promocodes",
        icon: "Ticket",
        details: "5"
    },
    {
        id: 2,
        name: "Reviewes",
        icon: "star",
        details: "4.5K"
    },
]

export default function Account() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <ImageBackground source={Images.linear_bg} style={styles.bg}>
                <Header
                    title={<Text style={styles.title}>Profile</Text>}
                    rightIcon={Icons.Icons({ name: 'option', height: 15.85, width: 3.35 })}
                    leftIcon={<View style={{ width: 30 }} />}
                />
                <Image source={Images.avatar_details} style={styles.avatar} />
                <Text style={styles.name}>Alex Nikiforov</Text>
                <Text style={styles.email}>alex@msn.com</Text>
                <View style={styles.list}>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={styles.item}>
                                <View style={styles.icon}>
                                    {Icons.Icons({name: item.icon, height:24, width:24})}
                                </View>
                                <Text style={styles.item_name}>{item.name}</Text>
                                <Text style={styles.item_details}>{item.details}</Text>
                            </View>
                        )
                    })}
                </View>
                <Text style={styles.subtitle}>Personal Information</Text>
                <View style={styles.block_info}>
                    <View style={styles.row}>
                        <Text style={styles.text_left}>Name:</Text>
                        <Text style={styles.text_right}>Christ Harison</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text_left}>Email:</Text>
                        <Text style={styles.text_right}>christ@gmail.com</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text_left}>Location:</Text>
                        <Text style={styles.text_right}>San Diego</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text_left}>Zip Code:</Text>
                        <Text style={styles.text_right}>1200</Text>
                    </View>
                    <View style={[styles.row,{marginBottom:0}]}>
                        <Text style={styles.text_left}>Phone Number:</Text>
                        <Text style={styles.text_right}>(+1) 5484 4757 84</Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}