import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";
import { Formik } from 'formik';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                {Icons.Icons({ name: "logo", height: 62, width: 54 })}
                <Text style={styles.login} onPress={()=>navigation.navigate("HomeScreen")}>Log in</Text>
            </View>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
                        <View style={styles.input_container}>
                            <View style={styles.icon}>
                                {Icons.Icons({ name: "mail", height: 24, width: 24 })}
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                value={values.email}
                                placeholder="Email"
                            />
                        </View>
                        <View style={[styles.input_container, { marginTop: 15 }]}>
                            <View style={styles.icon}>
                                {Icons.Icons({ name: "lock", height: 24, width: 24 })}
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleChange('password')}
                                value={values.password}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.forgot_pass}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.login_button} onPress={()=>navigation.navigate("HomeScreen")}>
                            <Text style={styles.login_text}>Log in</Text>
                        </TouchableOpacity>
                        <View style={styles.or_container}>
                            <View style={styles.line} />
                            <Text style={styles.or}>Or</Text>
                            <View style={styles.line} />
                        </View>
                        <View style={styles.special_login}>
                            <TouchableOpacity style={styles.special_button}>
                                {Icons.Icons({ name: 'fb_icon', height: 31, width: 31 })}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.special_button}>
                                {Icons.Icons({ name: 'google_icon', height: 31, width: 31 })}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.create_container}>
                            <Text style={styles.question}>Don’t have an account?</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
                                <Text style={styles.signup}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </View>
    )
}