import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.transparent,
        paddingTop:10
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10
    },
    list:{ 
        marginHorizontal: 16, 
        paddingTop: 10, 
        marginTop: 20 ,
    }
})