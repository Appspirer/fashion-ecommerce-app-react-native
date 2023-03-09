import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.transparent,
        paddingTop:10,
        paddingHorizontal:16
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:25
    },
    left_item:{
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        fontSize:14,
        marginLeft:15
    }
})