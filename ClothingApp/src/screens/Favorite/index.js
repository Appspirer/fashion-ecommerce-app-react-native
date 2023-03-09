import React from "react";
import { View, Text, FlatList } from 'react-native'
import Product from "../../components/Product";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Long Sleeve Shirts",
        img: Images.item1,
        price: 165,
        bg: "#FFFAF68F",
        favorite: true
    },
    {
        id: 1,
        name: "Casual Henley Shirts",
        img: Images.item2,
        price: 275,
        bg: "#EFEFF2",
        favorite: true
    },
    {
        id: 2,
        name: "Curved Hem Shirts",
        img: Images.item3,
        price: 100,
        bg: "#EDFDF466",
        favorite: true
    },
    {
        id: 3,
        name: "Casual Nolin",
        img: Images.item4,
        price: 100,
        bg: "#8E8F8626",
        favorite: true
    },
    {
        id: 4,
        name: "Curved Hem Shirts",
        img: Images.item5,
        price: 100,
        bg: "#F4F0C31F",
        favorite: true
    },
    {
        id: 5,
        name: "Curved Hem Shirts",
        img: Images.item6,
        price: 100,
        bg: "#DDFEF947",
        favorite: true
    },
    {
        id: 6,
        name: "Curved Hem Shirts",
        img: Images.item5,
        price: 100,
        bg: "#F4F0C31F",
        favorite: true
    },
    {
        id: 7,
        name: "Curved Hem Shirts",
        img: Images.item6,
        price: 100,
        bg: "#DDFEF947",
        favorite: true
    },
    {
        id: 8,
        name: "Curved Hem Shirts",
        img: Images.item5,
        price: 100,
        bg: "#F4F0C31F",
        favorite: true
    },
    {
        id: 9,
        name: "Curved Hem Shirts",
        img: Images.item6,
        price: 100,
        bg: "#DDFEF947",
        favorite: true
    },
]


export default function Favorite() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorite</Text>
            <View style={{ flex: 1, paddingBottom: 80 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    data={data}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <Product data={item} style={{ marginRight: index % 2 === 0 ? 16 : 0 }} showHeart={true} />
                        )
                    }}
                />
            </View>
        </View>
    )
}