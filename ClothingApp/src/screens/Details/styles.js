import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.blue_gray,
        paddingTop:10
    },
    right_ic:{
        height:44,
        width:44,
        borderRadius:22,
        backgroundColor: Colors.white,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height: height*0.4,
        alignSelf:'center',
        marginTop:-20,
    },
    content_container:{
        backgroundColor: Colors.white,
        borderTopLeftRadius:45,
        borderTopRightRadius:45,
        flex:1,
        marginTop:30,
        paddingTop:30,
        paddingHorizontal:20
    },
    name:{
        fontSize:20,
        fontWeight:'600',
        color: Colors.black_text,
        width:'40%'
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    price:{
        fontSize:18,
        fontWeight:'600'
    },
    description:{
        fontSize:12,
        color: Colors.gray_text,
        marginTop:15,
        letterSpacing:0.5
    },
    color:{
        fontSize:14,
        color: Colors.gray_text2,
        marginTop:30
    },
    color_container:{
        flexDirection:'row',
        marginTop:20,
    },
    color_item:{
        borderRadius:50,
        marginRight:10,
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.orange,
    },
    button:{
        width:width*0.7,
        backgroundColor: Colors.orange,
        alignSelf:'center',
        paddingVertical:16,
        borderRadius:50,
        alignItems:'center',
        position:'absolute',
        bottom:30
    },
    text:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'600'
    }
})