import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
        paddingTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    img: {
        width: width - 32,
        height: (width - 32) * 157 / 275,
    },
    item: {
        marginHorizontal: 16,
        height:(width - 32) * 157 / 275 +33/2,
        justifyContent:'flex-end',
    },
    check:{
        height:33,
        width:33,
        borderRadius:17,
        backgroundColor: Colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:Colors.white,
        position:'absolute',
        top:2,
        right:-10
    },
    dot_container:{
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center'
    },
    dot:{
        borderRadius:20,
        marginHorizontal:5
    },
    subtitle:{
        marginLeft:16,
        fontSize:18,
        fontWeight:'500',
        marginTop:40
    },
    img_recent:{
        height:51,
        width:51,
    },
    item_recent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
        padding:8,
        backgroundColor:Colors.white,
        borderRadius:10
    },
    left_item:{
        flexDirection:'row',
        alignItems:'center'
    },
    name:{
        fontSize:14,
        fontWeight:'500'
    },
    img_container:{
        height:60,
        width:70,
        borderRadius:10,
        backgroundColor: Colors.green_10,
        justifyContent:'center',
        alignItems:'center'
    },
    date:{
        fontSize:12,
        color: Colors.gray_text,
        marginTop:5
    },
    info:{
        marginLeft:15
    },
    price:{
        fontSize:14,
        marginRight:15,
        fontWeight:'500',
        color: Colors.red
    }
})