import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16
    },
    title:{
        flexDirection:'row',
        alignItems:'center'
    },
    dot:{
        height:10,
        width:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:Colors.white,
        backgroundColor: Colors.orange,
        position:'absolute',
        right:1
    },
    text:{
        fontSize:14,
        marginLeft:5
    },
    right_ic:{
        height:38,
        width:38,
        borderRadius:5,
        backgroundColor: Colors.white,
        justifyContent:'center',
        alignItems:'center'
    },
    notification:{
        width:30,
        alignItems:'flex-end'
    }
})