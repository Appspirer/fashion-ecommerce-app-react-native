import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Product({ data, style, showHeart = false, onPress }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress ? onPress : null}>
            <View style={[styles.img_container, { backgroundColor: data.bg }]}>
                <Image source={data.img} style={styles.img} />
                {showHeart ? <TouchableOpacity style={styles.favorite}>
                    {Icons.Icons({ name: data.favorite ? 'favorite_focus' : 'favorite', height: 12.72, width: 12.72 })}
                </TouchableOpacity> : <></>}
            </View>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.price}>${data.price}</Text>
        </TouchableOpacity>
    )
}