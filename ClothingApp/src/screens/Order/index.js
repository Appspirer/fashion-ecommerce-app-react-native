import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const statusData = [
    {
        id: 0,
        name: "Completed"
    },
    {
        id: 1,
        name: "Cancelled"
    }
]

const data = [
    {
        id: 0,
        name: "Henley Shirts",
        img: Images.item4,
        price: 250,
        date: 'Today',
        bg: "#3E42291A"
    },
    {
        id: 1,
        name: "Casual Shirts",
        img: Images.item6,
        price: 145,
        date: "20 Jan’2021",
        bg: "#87C7B91A"
    },
    {
        id: 2,
        name: "Casual Nolin",
        img: Images.item7,
        price: 225,
        date: '20 Mar’2021',
        bg: "#9C9CA41A"
    },
    {
        id: 3,
        name: "Casual Nolin",
        img: Images.item8,
        price: 225,
        date: '20 Mar’2021',
        bg: "#CAA0A41A"
    },
]

export default function Order() {

    const [statusSelected, setStatusSelected] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Order</Text>
            <View style={styles.status_container}>
                {statusData.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={[styles.status_item, {}]} onPress={() => setStatusSelected(index)}>
                            <Text style={[styles.status_text, {
                                fontWeight: statusSelected === index ? '600' : '400',
                                color: statusSelected === index ? Colors.orange : Colors.gray_text
                            }]}>{item.name}</Text>
                            <View style={[styles.border_bottom, {
                                height: statusSelected === index ? 5 : 1,
                                backgroundColor: statusSelected === index ? Colors.orange : Colors.border,
                                borderRadius: statusSelected === index ? 10 : 0,
                                marginTop: statusSelected === index ? -2.5 : 0
                            }]}></View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity key={index} style={styles.item}>
                            <View style={styles.left_item}>
                                <View style={[styles.img_container, { backgroundColor: item.bg }]}>
                                    <Image source={item.img} style={styles.img} />
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>${item.price}</Text>
                                </View>
                            </View>
                            <Text style={styles.date}>{item.date}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}