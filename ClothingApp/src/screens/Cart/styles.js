import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.transparent,
        paddingTop:10,
        paddingHorizontal:16
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    item:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        backgroundColor: Colors.white,
        marginBottom:10,
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical:10
    },
    left_item:{
        flexDirection:'row',
        alignItems:'center'
    },
    img_container:{
        height:80,
        width:85,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginRight:20
    },
    img:{
        height:75,
        width:55
    },
    info:{
        
    },
    name:{
        fontSize:14,
        color: Colors.gray_text
    },
    price:{
        fontSize:16,
        fontWeight:'600',
        marginTop:10
    },
    quality_container:{
        flexDirection:"row",
        alignItems:'center'
    },
    quality_button:{
        backgroundColor: Colors.pink_button,
        paddingVertical:8,
        paddingHorizontal:12,
        borderRadius:8
    },
    quality:{
        fontSize:14,
        fontWeight:'600',
        marginHorizontal:10
    },
    bottom:{
        marginBottom:60,
    },
    sub_total:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center'
    },
    sub_total_text:{
        fontSize:14,
    },
    sub_total_price:{
        fontSize:18,
        fontWeight:'600'
    },
    button:{
        marginTop:30,
        backgroundColor: Colors.orange,
        width:width*0.7,
        alignSelf:'center',
        borderRadius:50,
        alignItems:'center',
        paddingVertical:16,
        marginBottom:20
    },
    button_text:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'600'
    }
})