import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Header({ showTitle = true, rightIcon, leftIcon, onPressLeft, title, style }) {
    return (
        <View style={[styles.container,style]}>
            <TouchableOpacity onPress={onPressLeft ? onPressLeft : null}>
                {leftIcon ? leftIcon : Icons.Icons({ name: 'menu', height: 15.39, width: 27.54 })}
            </TouchableOpacity>
            {showTitle && (title ? title : <View style={styles.title}>
                {Icons.Icons({ name: "location", height: 10, width: 8 })}
                <Text style={styles.text}>15/2 New Texas</Text>
            </View>)}
            <TouchableOpacity style={styles.notification}>
                {rightIcon ? rightIcon :
                    <View style={styles.right_ic}>
                        <View>
                            {Icons.Icons({ name: 'bell', height: 24.83, width: 24.7 })}
                            <View style={styles.dot} />
                        </View>
                    </View>}
            </TouchableOpacity>
        </View>
    )
}