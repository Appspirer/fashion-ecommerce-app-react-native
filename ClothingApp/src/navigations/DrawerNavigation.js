import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, MyCustomDrawer, Search } from '../screens';
import { Dimensions } from 'react-native'
import BottomTabs from './BottomTabs';

var { height, width } = Dimensions.get("window")

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: width
                }
            }}
            drawerContent={(props) => <MyCustomDrawer {...props} />}
        >
            <Drawer.Screen name="BottomTabs" component={BottomTabs} />
            <Drawer.Screen name="Search" component={Search} />
        </Drawer.Navigator>
    );
}