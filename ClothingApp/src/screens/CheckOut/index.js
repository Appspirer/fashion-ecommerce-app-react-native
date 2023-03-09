import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Header from "../../components/Header";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const paymentData = [
    {
        id: 0,
        logo: Images.ApplePay
    },
    {
        id: 1,
        logo: Images.visa
    },
    {
        id: 2,
        logo: Images.Mastercard
    },
    {
        id: 3,
        logo: Images.PayPal
    },
]

export default function CheckOut({ navigation }) {

    const [paymentSelected, setPaymentSelected] = useState(0)
    const [addressSelected, setAddressSelected] = useState(0)

    return (
        <View style={styles.container}>
            <Header
                leftIcon={Icons.Icons({ name: 'arrow_left', height: 24, width: 24 })}
                onPressLeft={() => navigation.goBack()}
                title={<Text style={styles.title}>Checkout</Text>}
                rightIcon={
                    <View style={{ width: 30 }} />
                }
                style={{ paddingHorizontal: 0 }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.sub_title}>Delivery address</Text>
                <TouchableOpacity style={[styles.delivery_block, {
                    shadowColor: addressSelected === 0 ? Colors.black : Colors.transparent,
                    borderWidth: 1,
                    borderColor: addressSelected === 0 ? Colors.white : Colors.border,
                    backgroundColor: addressSelected === 0 ? Colors.white : Colors.transparent
                }]} onPress={() => setAddressSelected(0)}>
                    <View style={styles.delivery_left}>
                        <TouchableOpacity style={[styles.check, {
                            backgroundColor: addressSelected === 0 ? Colors.orange : Colors.white
                        }]}>
                            {Icons.Icons({ name: 'check', height: 13, width: 13 })}
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.delivery_name}>Home</Text>
                            <Text style={styles.delivery_phone}>(342)  4522019</Text>
                            <Text style={styles.delivery_address}>220  New York</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.edit}>
                        {Icons.Icons({ name: "edit", height: 24, width: 24 })}
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.delivery_block, {
                    shadowColor: addressSelected === 1 ? Colors.black : Colors.transparent,
                    borderWidth: 1,
                    borderColor: addressSelected === 1 ? Colors.white : Colors.border,
                    backgroundColor: addressSelected === 1 ? Colors.white : Colors.transparent
                }]}
                    onPress={() => setAddressSelected(1)}
                >
                    <View style={styles.delivery_left}>
                        <TouchableOpacity style={[styles.check, {
                            backgroundColor: addressSelected === 1 ? Colors.orange : Colors.white,
                            borderWidth: 1,
                            borderColor: Colors.border
                        }]}>
                            {Icons.Icons({ name: 'check', height: 13, width: 13 })}
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.delivery_name}>Office</Text>
                            <Text style={styles.delivery_phone}>(342)  4522019</Text>
                            <Text style={styles.delivery_address}>220  Montmartre,paris</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.edit}>
                        {Icons.Icons({ name: "edit", height: 24, width: 24 })}
                    </TouchableOpacity>
                </TouchableOpacity>
                <Text style={styles.sub_title}>Billing information</Text>
                <View style={styles.billing_container}>
                    <View style={styles.fee}>
                        <Text style={styles.fee_text}>Delivery Fee</Text>
                        <Text style={styles.fee_price}>$50</Text>
                    </View>
                    <View style={styles.fee}>
                        <Text style={styles.fee_text}>Delivery Fee</Text>
                        <Text style={styles.fee_price}>$50</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={[styles.fee, { marginBottom: 0 }]}>
                        <Text style={styles.fee_text}>Delivery Fee</Text>
                        <Text style={styles.fee_price}>$50</Text>
                    </View>
                </View>
                <Text style={styles.sub_title}>Payment Method</Text>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.payment_container}>
                        {paymentData.map((item, index) => {
                            return (
                                <View key={index} style={styles.item_container}>
                                    <TouchableOpacity style={styles.payment_item} onPress={() => setPaymentSelected(index)}>
                                        <Image source={item.logo} style={styles.logo} />
                                    </TouchableOpacity>
                                    {paymentSelected === index && <View style={styles.check_green}>
                                        {Icons.Icons({ name: 'check', height: 9, width: 9 })}
                                    </View>}
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Payment")}>
                    <View style={styles.arrow}>
                        {Icons.Icons({ name: "next_arrow", height: 13.68, width: 14.69 })}
                    </View>
                    <Text style={styles.text}>Swipe for Payment</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}