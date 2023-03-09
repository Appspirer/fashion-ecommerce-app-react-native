import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import Header from "../../components/Header";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        color: "#BEE8EA"
    },
    {
        id: 1,
        color: "#141B4A"
    },
    {
        id: 2,
        color: "#CEE3F5"
    },
    {
        id: 3,
        color: "#F4E5C3"
    },
]

export default function Details({ navigation }) {

    const [selected, setSelected] = useState(0)

    return (
        <View style={styles.container}>
            <Header
                showTitle={false}
                leftIcon={Icons.Icons({ name: 'arrow_left', height: 24, width: 24 })}
                onPressLeft={() => navigation.goBack()}
                rightIcon={
                    <View style={styles.right_ic}>
                        {Icons.Icons({ name: 'heart_details', height: 24, width: 24 })}
                    </View>
                }
            />
            <Image source={Images.details} style={styles.img} />
            <View style={styles.content_container}>
                <View style={styles.info}>
                    <Text style={styles.name}>Casual Henley Shirts</Text>
                    <Text style={styles.price}>$175</Text>
                </View>
                <Text style={styles.description}>A Henley shirt is a collarless pullover shirt, by a round neckline and a placket about 3 to 5 inches (8 to 13 cm) long and usually having 2–5 buttons.</Text>
                <Text style={styles.color}>Colors</Text>
                <View>
                    <FlatList
                        style={styles.color_container}
                        data={data}
                        horizontal={true}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[styles.color_item, {
                                    borderWidth: index === selected ? 1 : 0,
                                }]}
                                    onPress={() => setSelected(index)}
                                >
                                    <View style={{
                                        backgroundColor: item.color,
                                        height: index === selected ? 18 : 24,
                                        width: index === selected ? 18 : 24,
                                        borderRadius: 12
                                    }} />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cart')}>
                    <Text style={styles.text}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}