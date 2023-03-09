import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import Header from "../../components/Header";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Settings({navigation}) {

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabledUpdate, setIsEnabledUpdate] = useState(true);
    const toggleSwitchUpdate = () => setIsEnabledUpdate(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Header
                leftIcon={Icons.Icons({ name: 'arrow_left', height: 24, width: 24 })}
                onPressLeft={() => navigation.goBack()}
                title={<Text style={styles.title}>Checkout</Text>}
                rightIcon={
                    <View style={{ width: 30 }} />
                }
                style={{ paddingHorizontal: 0, marginBottom:40 }}
            />
            <TouchableOpacity style={styles.row}>
                <View style={styles.left_item}>
                    {Icons.Icons({ name: "mail_orange", height: 42, width: 42 })}
                    <Text style={styles.text}>Email Support</Text>
                </View>
                {Icons.Icons({ name: "next_arrow_gray", height: 24, width: 24 })}
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
                <View style={styles.left_item}>
                    {Icons.Icons({ name: "mark_question", height: 42, width: 42 })}
                    <Text style={styles.text}>FAQ</Text>
                </View>
                {Icons.Icons({ name: "next_arrow_gray", height: 24, width: 24 })}
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
                <View style={styles.left_item}>
                    {Icons.Icons({ name: "privacy_policy", height: 42, width: 42 })}
                    <Text style={styles.text}>Privacy Stetesment</Text>
                </View>
                {Icons.Icons({ name: "next_arrow_gray", height: 24, width: 24 })}
            </TouchableOpacity>
            <View style={styles.row}>
                <View style={styles.left_item}>
                    {Icons.Icons({ name: "notify", height: 42, width: 42 })}
                    <Text style={styles.text}>Notification</Text>
                </View>
                <Switch
                    trackColor={{ false: '#767577', true: Colors.orange }}
                    thumbColor={isEnabled ? Colors.white : Colors.white}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.row}>
                <View style={styles.left_item}>
                    {Icons.Icons({ name: "update", height: 42, width: 42 })}
                    <Text style={styles.text}>Update</Text>
                </View>
                <Switch
                    trackColor={{ false: '#767577', true: Colors.orange }}
                    thumbColor={isEnabledUpdate ? Colors.white : Colors.white}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchUpdate}
                    value={isEnabledUpdate}
                />
            </View>
        </View>
    )
}