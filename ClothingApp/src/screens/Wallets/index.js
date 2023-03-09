import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Images from "../../themes/Images";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')

const dataCard = [
    {
        id: 0,
        img: Images.wallet1
    },
    {
        id: 1,
        img: Images.wallet2
    },
    {
        id: 2,
        img: Images.wallet2
    }
]

export default function Wallets({ navigation }) {

    const [selected, setSelected] = useState(0)

    return (
        <View style={styles.container}>
            <Header
                title={<Text style={styles.title}>My Wallets</Text>}
                rightIcon={Icons.Icons({ name: 'option', height: 15.85, width: 3.35 })}
                leftIcon={Icons.Icons({ name: 'arrow_left', height: 24, width: 24 })}
                onPressLeft={() => navigation.goBack()}
            />
            <Carousel
                width={width}
                height={(width - 32) * 157 / 275 + 30}
                data={dataCard}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => { setSelected(index) }}
                mode='parallax'
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.item}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.check}>
                            {Icons.Icons({ name: "check", height: 10, width: 16 })}
                        </View>
                    </View>
                )}
            />
            <View style={styles.dot_container}>
                {dataCard.map((item, index) => {
                    return (
                        <View key={index} style={[styles.dot, {
                            height: index === selected ? 15 : 11,
                            width: index === selected ? 15 : 11,
                            backgroundColor: index === selected ? Colors.orange : Colors.pink_button
                        }]} />
                    )
                })}
            </View>
            <Text style={styles.subtitle}>Recent transactions</Text>
            <View style={{ paddingHorizontal: 16, flex: 1, marginTop: 20 }}>
                <FlatList
                    style={{ paddingTop: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={[...Array(6).keys()]}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity key={index} style={styles.item_recent}>
                                <View style={styles.left_item}>
                                    <View style={styles.img_container}>
                                        <Image source={Images.item6} style={styles.img_recent} />
                                    </View>
                                    <View style={styles.info}>
                                        <Text style={styles.name}>Casual Shirts</Text>
                                        <Text style={styles.date}>23 Mar’2021</Text>
                                    </View>
                                </View>
                                <Text style={styles.price}>$250</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}