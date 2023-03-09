import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Modal, Dimensions, ImageBackground } from 'react-native'
import Header from "../../components/Header";
import Product from "../../components/Product";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

var { height, width } = Dimensions.get('window')

const categoriesData = [
    {
        id: 0,
        name: 'Dress',
        img: Images.dress
    },
    {
        id: 1,
        name: 'Shirt',
        img: Images.shirt
    },
    {
        id: 2,
        name: 'Pants',
        img: Images.pants
    },
    {
        id: 3,
        name: 'Tshirt',
        img: Images.tshirt
    },
]

const data = [
    {
        id: 0,
        name: "Long Sleeve Shirts",
        img: Images.item1,
        price: 165,
        bg: "#FFFAF68F"
    },
    {
        id: 1,
        name: "Casual Henley Shirts",
        img: Images.item2,
        price: 275,
        bg: "#EFEFF2"
    },
    {
        id: 2,
        name: "Curved Hem Shirts",
        img: Images.item3,
        price: 100,
        bg: "#EDFDF466"
    },
]

const modalCategory = [
    {
        id: 0,
        name: "New Arrival"
    },
    {
        id: 1,
        name: "Top Tranding"
    },
    {
        id: 2,
        name: "Featured Products"
    },
]

export default function Home({ navigation }) {

    const [value, setValue] = useState('')
    const [categoriesSelected, setCategoriesSelected] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const [modalSelected, setModalSelected] = useState(0)
    const [multiSliderValue, setMultiSliderValue] = React.useState([50, 200]);
    const [distanceMultiSliderValue, setDistanceMultiSliderValue] = React.useState([500, 2000]);

    multiSliderValuesChange = values => setMultiSliderValue(values);
    distanceMultiSliderValuesChange = values => setDistanceMultiSliderValue(values);

    const renderModal = () => {
        return (
            <View style={styles.modal_container}>
                <View style={styles.modal_content}>
                    <View style={styles.modal_header}>
                        <TouchableOpacity>
                            <Text style={styles.clear}>Clear</Text>
                        </TouchableOpacity>
                        <Text style={styles.modal_title}>Filters</Text>
                        <TouchableOpacity style={styles.close} onPress={() => setShowModal(false)}>
                            {Icons.Icons({ name: "ic_x", height: 13, width: 13 })}
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 16 }}>
                        <Text style={styles.sub_title}>Category</Text>
                        <View style={styles.category_list}>
                            {modalCategory.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                        style={[styles.modal_item, {
                                            backgroundColor: modalSelected === index ? Colors.orange : Colors.white
                                        }]}
                                        onPress={() => setModalSelected(index)}>
                                        <Text style={[styles.modal_item_name, {
                                            color: modalSelected === index ? Colors.white : Colors.black_text
                                        }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={[styles.price_text_container, { marginBottom: 50 }]}>
                            <Text style={[styles.sub_title, { marginTop: 0 }]}>Category</Text>
                            <View style={styles.price_container}>
                                <Text style={styles.price}>${multiSliderValue[0]}-</Text>
                                <Text style={styles.price}>${multiSliderValue[1]}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <MultiSlider
                                values={[multiSliderValue[0], multiSliderValue[1]]}
                                sliderLength={width - 70}
                                onValuesChange={multiSliderValuesChange}
                                min={0}
                                max={300}
                                step={10}
                                allowOverlap
                                snapped
                                selectedStyle={{
                                    backgroundColor: Colors.orange,
                                }}
                                unselectedStyle={{
                                    backgroundColor: Colors.gray,
                                }}
                                customMarkerRight={() => (
                                    <View style={styles.marker}>
                                        <ImageBackground source={Images.bubble} style={styles.bubble}>
                                            <Text style={styles.bubble_text}>${multiSliderValue[1]}</Text>
                                        </ImageBackground>
                                    </View>
                                )}
                                customMarkerLeft={() => (
                                    <View style={styles.marker}>
                                        <ImageBackground source={Images.bubble} style={styles.bubble}>
                                            <Text style={styles.bubble_text}>${multiSliderValue[0]}</Text>
                                        </ImageBackground>
                                    </View>
                                )}
                                isMarkersSeparated={true}
                            />
                        </View>
                        <View style={[styles.price_text_container, { marginBottom: 50 }]}>
                            <Text style={[styles.sub_title, { marginTop: 0 }]}>Distance</Text>
                            <View style={styles.price_container}>
                                <Text style={styles.price}>
                                    {distanceMultiSliderValue[0] > 1000 ? (distanceMultiSliderValue[0] / 1000).toString().slice(0, 1) : distanceMultiSliderValue[0]}
                                    {distanceMultiSliderValue[0] > 1000 ? 'Km' : "m"}-
                                </Text>
                                <Text style={styles.price}>
                                    {distanceMultiSliderValue[1] > 1000 ? (distanceMultiSliderValue[1] / 1000).toString().slice(0, 1) : distanceMultiSliderValue[1]}
                                    {distanceMultiSliderValue[1] > 1000 ? 'Km' : "m"}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <MultiSlider
                                values={[distanceMultiSliderValue[0], distanceMultiSliderValue[1]]}
                                sliderLength={width - 70}
                                onValuesChange={distanceMultiSliderValuesChange}
                                min={0}
                                max={3000}
                                step={100}
                                allowOverlap
                                snapped
                                selectedStyle={{
                                    backgroundColor: Colors.orange,
                                }}
                                unselectedStyle={{
                                    backgroundColor: Colors.gray,
                                }}
                                isMarkersSeparated={true}
                                customMarkerRight={() => (
                                    <View style={styles.marker}>
                                        <ImageBackground source={Images.bubble} style={styles.bubble}>
                                            <Text style={styles.bubble_text}>
                                                {distanceMultiSliderValue[1] > 1000 ? (distanceMultiSliderValue[1] / 1000).toString().slice(0, 1) : distanceMultiSliderValue[1]}
                                                {distanceMultiSliderValue[1] > 1000 ? 'Km' : "m"}
                                            </Text>
                                        </ImageBackground>
                                    </View>
                                )}
                                customMarkerLeft={() => (
                                    <View style={styles.marker}>
                                        <ImageBackground source={Images.bubble} style={styles.bubble}>
                                            <Text style={styles.bubble_text}>
                                                {distanceMultiSliderValue[0] > 1000 ? (distanceMultiSliderValue[0] / 1000).toString().slice(0, 1) : distanceMultiSliderValue[0]}
                                                {distanceMultiSliderValue[0] > 1000 ? 'Km' : "m"}
                                            </Text>
                                        </ImageBackground>
                                    </View>
                                )}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => { setShowModal(false), navigation.navigate("Search") }}>
                            <Text style={styles.text}>Apply Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
            >
                {renderModal()}
            </Modal>
            <Header 
                onPressLeft={()=>navigation.openDrawer()}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={styles.title}>Explore</Text>
                    <Text style={styles.subtitle}>best Outfits for you</Text>
                    <View style={styles.search_container}>
                        {Icons.Icons({ name: "search", height: 13, width: 13 })}
                        <TextInput
                            style={styles.input}
                            placeholder="Search items..."
                            value={value}
                            onChangeText={setValue}
                        />
                        <TouchableOpacity style={styles.filter} onPress={() => setShowModal(true)}>
                            {Icons.Icons({ name: "filter", height: 18, width: 18 })}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.categories}>
                        {categoriesData.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={[styles.categories_item, {
                                    borderColor: categoriesSelected === index ? Colors.white : Colors.border
                                }]}
                                    onPress={() => setCategoriesSelected(index)}
                                >
                                    <Image source={item.img} style={styles.categories_img} />
                                    <Text style={[styles.categories_text, {
                                        color: categoriesSelected === index ? Colors.black : Colors.gray_text
                                    }]}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.title_list}>
                        <Text style={styles.title_list_text}>New Arrival</Text>
                        <TouchableOpacity>
                            <Text style={styles.see_all}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                        {data.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Product data={item} style={{ marginRight: index === data.length - 1 ? 32 : 16 }} onPress={()=>navigation.navigate("Details")}/>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}