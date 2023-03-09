import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import Header from "../../components/Header";
import Product from "../../components/Product";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Long Sleeve Shirts",
        img: Images.item1,
        price: 165,
        bg: "#FFFAF68F",
        favorite:true
    },
    {
        id: 1,
        name: "Casual Henley Shirts",
        img: Images.item2,
        price: 275,
        bg: "#EFEFF2",
        favorite:false
    },
    {
        id: 2,
        name: "Curved Hem Shirts",
        img: Images.item3,
        price: 100,
        bg: "#EDFDF466",
        favorite:false
    },
    {
        id: 3,
        name: "Casual Nolin",
        img: Images.item4,
        price: 100,
        bg: "#8E8F8626",
        favorite:true
    },
    {
        id: 4,
        name: "Curved Hem Shirts",
        img: Images.item5,
        price: 100,
        bg: "#F4F0C31F",
        favorite:true
    },
    {
        id: 5,
        name: "Curved Hem Shirts",
        img: Images.item6,
        price: 100,
        bg: "#DDFEF947",
        favorite:false
    },
]

export default function Search({navigation}) {

    const [value, setValue] = useState('')

    return (
        <View style={styles.container}>
            <Header 
                onPressLeft={()=>navigation.openDrawer()}
            />
            <View style={styles.search_container}>
                {Icons.Icons({ name: "search", height: 13, width: 13 })}
                <TextInput
                    style={styles.input}
                    placeholder="Search items..."
                    value={value}
                    onChangeText={setValue}
                />
                <TouchableOpacity style={styles.filter}>
                    {Icons.Icons({ name: "filter", height: 18, width: 18 })}
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.recent_search}>
                <Text style={styles.recent_text}>Recent searches</Text>
                <View>
                    {Icons.Icons({ name: "arrow_right_black", height: 13, width: 8 })}
                </View>
            </TouchableOpacity>
            <Text style={styles.result}>Search results showing for “Shirt”</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.list}
                data={data}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                        <Product data={item} style={{ marginRight: index % 2 === 0 ? 16 : 0 }} showHeart={true}/>
                    )
                }}
            />
        </View>
    )
}