import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Images from "../../themes/Images";
import Icons from "../../themes/Icons";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')

const carouselData = [
    {
        id: 0,
        img: Images.carousel1,
        title: "Choose Product",
        description: "A product is the item offered for sale. A product can be a service or an item. It can be physical or in virtual or cyber form"
    },
    {
        id: 1,
        img: Images.carousel2,
        title: "Make Payment",
        description: "Payment is the transfer of money services in exchange product or Payments typically made terms agreed "
    },
    {
        id: 2,
        img: Images.carousel3,
        title: "Get Your Order",
        description: "Business or commerce an order is a stated intention either spoken to engage in a commercial transaction specific products "
    },
]

export default function Boarding({ navigation }) {

    const [current, setCurrent] = useState(0)

    const onChangeCurrent = (index) => {
        if (current === 2) {
            navigation.navigate("Login")
        } else {
            setCurrent(index % 3)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.current_page_container}>
                <Text style={styles.current_page}>{current + 1}
                    <Text style={{ color: current === 2 ? Colors.black : Colors.gray_text }}>/{carouselData.length}</Text>
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
            </View>
            <Carousel
                width={width}
                height={height * 0.65}
                data={carouselData}
                scrollAnimationDuration={1000}
                defaultIndex={current}
                onSnapToItem={(index) => onChangeCurrent(current + 1)}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.item}>
                        <Image source={item.img} style={styles.img} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button} onPress={() => onChangeCurrent(current + 1)}>
                <Text style={styles.text}>{current === 2 ? "Get Started" : "Next"}</Text>
                {[...Array(current).keys()].map((item, index) => {
                    return (
                        <View key={index}>
                            {Icons.Icons({ name: 'arrow_right', height: 15, width: 10 })}
                        </View>
                    )
                })}
                {Icons.Icons({ name: 'arrow_right_white', height: 15, width: 10 })}
            </TouchableOpacity>
        </View>
    )
}