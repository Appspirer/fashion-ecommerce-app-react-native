import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Header from "../../components/Header";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const baseData = [
    {
        id: 0,
        name: "Henley Shirts",
        img: Images.item4,
        price: 250,
        quality: 1,
        bg: "#3E42291A"
    },
    {
        id: 1,
        name: "Casual Shirts",
        img: Images.item6,
        price: 145,
        quality: 2,
        bg: "#87C7B91A"
    },
    {
        id: 2,
        name: "Casual Nolin",
        img: Images.item7,
        price: 225,
        quality: 2,
        bg: "#9C9CA41A"
    },
    {
        id: 3,
        name: "Casual Nolin",
        img: Images.item8,
        price: 225,
        quality: 2,
        bg: "#CAA0A41A"
    },
]

export default function Cart({navigation}) {

    const [data, setData] = useState(baseData)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        getTotal(data)
    }, [])

    const getTotal = (newData) => {
        let temp = 0
        for (let i = 0; i < newData.length; i++) {
            temp = temp + newData[i].price * newData[i].quality
        }
        setSubTotal(temp)
    }

    const onMinus = (id) => {
        let temp = data
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id && temp[i].quality > 1) {
                temp[i].quality = temp[i].quality - 1
            } else if (temp[i].id === id && temp[i].quality === 1) {
                temp = temp.filter(item => item.id !== id)
            }
        }
        setData(temp)
        getTotal(temp)
    }

    const onPlus = (id) => {
        let temp = data
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id === id) {
                temp[i].quality = temp[i].quality + 1
            }
        }
        setData(temp)
        getTotal(temp)
    }

    return (
        <View style={styles.container}>
            <Header
                leftIcon={Icons.Icons({ name: 'arrow_left', height: 24, width: 24 })}
                onPressLeft={() => navigation.goBack()}
                title={<Text style={styles.title}>My Cart</Text>}
                rightIcon={
                    <View style={{ width: 30 }} />
                }
                style={{ paddingHorizontal: 0, marginBottom:10 }}
            />
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
                            <View style={styles.quality_container}>
                                <TouchableOpacity style={styles.quality_button} onPress={() => onPlus(item.id)}>
                                    {Icons.Icons({ name: 'plus', height: 9, width: 9 })}
                                </TouchableOpacity>
                                <Text style={styles.quality}>{item.quality}</Text>
                                <TouchableOpacity style={styles.quality_button} onPress={() => onMinus(item.id)}>
                                    {Icons.Icons({ name: 'minus', height: 9, width: 9 })}
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <View style={styles.bottom}>
                <View style={styles.sub_total}>
                    <Text style={styles.sub_total_text}>Subtotal :</Text>
                    <Text style={styles.sub_total_price}>${subTotal}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("CheckOut")}>
                    <Text style={styles.button_text}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}