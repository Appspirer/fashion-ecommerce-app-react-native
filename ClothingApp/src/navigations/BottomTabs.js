import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Account, Favorite, Cart, Order } from '../screens';
import { View, Dimensions } from 'react-native'
import Icons from '../themes/Icons';
import Colors from '../themes/Colors';

var { height, width } = Dimensions.get('window')

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                height: 60,
                paddingTop: 0,
                paddingBottom: 0,
                borderTopWidth: 0,
                paddingHorizontal: 16,
                position:'absolute'
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 60,
                            width: (width - 32) / 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            {focused && <View style={{ position: 'absolute', top: -3 }}>
                                {Icons.Icons({ name: "ellipse", height: 13.36, width: 13.36 })}
                            </View>}
                            {Icons.Icons({ name: focused ? 'home_focus' : "home", height: 20, width: 19 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Order"
                component={Order}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 60,
                            width: (width - 32) / 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {focused && <View style={{ position: 'absolute', top: -3 }}>
                                {Icons.Icons({ name: "ellipse", height: 13.36, width: 13.36 })}
                            </View>}
                            {Icons.Icons({ name: focused ? 'cart_focus' : "cart", height: 24, width: 24 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 60,
                            width: (width - 32) / 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {focused && <View style={{ position: 'absolute', top: -3 }}>
                                {Icons.Icons({ name: "ellipse", height: 13.36, width: 13.36 })}
                            </View>}
                            {Icons.Icons({ name: focused ? 'heart_focus' : "heart", height: 22, width: 22 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            height: 60,
                            width: (width - 32) / 4,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {focused && <View style={{ position: 'absolute', top: -3 }}>
                                {Icons.Icons({ name: "ellipse", height: 13.36, width: 13.36 })}
                            </View>}
                            {Icons.Icons({ name: focused ? 'account_focus' : "account", height: 20, width: 16 })}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}