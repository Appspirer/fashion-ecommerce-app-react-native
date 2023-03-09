import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Payment({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.check_container}>
                <View style={styles.check}>
                    {Icons.Icons({ name: "check_orange", height: 34, width: 45 })}
                </View>
            </View>
            <Text style={styles.title}>Congratulation!!!</Text>
            <Text style={styles.description}>Payment is the transfer of money</Text>
            <Text style={styles.description}>services in exchange product or Payments </Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.orange, marginTop: 30 }]}>
                <Text style={[styles.text, { color: Colors.white }]}>Get your receipt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.orange_2 }]} onPress={() => navigation.navigate("Home")}>
                <Text style={[styles.text, { color: Colors.orange }]}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    )
}