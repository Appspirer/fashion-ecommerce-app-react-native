import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.transparent
    },
    logo:{
        alignItems:'center',
        marginTop: height*0.1
    },
    login:{
        fontSize:22,
        fontWeight:'600',
        marginTop:30
    },
    input_container:{
        flexDirection:'row',
        backgroundColor: Colors.white,
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:10
    },
    form:{
        marginHorizontal:16,
        marginTop:30
    },
    icon:{
        backgroundColor: Colors.pink_10,
        height: 45,
        width:48, 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    input:{
        height:45,
        marginLeft:10,
        width: width -116
    },
    forgot_pass:{
        fontSize:12,
        color:Colors.black_text,
        marginTop:20,
        alignSelf:'flex-end'
    },
    login_button:{
        backgroundColor: Colors.orange,
        width:width*0.7,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:20,
        height:60,
        borderRadius:133
    },
    login_text:{
        fontSize:16,
        color: Colors.white,
        fontWeight:'600'
    },
    or_container:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:40
    },
    or:{
        fontSize:12,
        color: Colors.black_text,
        marginHorizontal:20
    },
    line:{
        height:1,
        width:width*0.25,
        backgroundColor: Colors.black_text
    },
    special_login:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:width*0.5,
        alignSelf:'center',
        marginTop:30,
    },
    special_button:{
        height:70,
        width:70,
        borderRadius:35, 
        backgroundColor: Colors.white,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:Colors.black,
        shadowOpacity:0.1,
        shadowRadius:5,
        shadowOffset:{
            height:1
        }
    },
    create_container:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:40
    },
    question:{
        fontSize:14,
        color: Colors.gray_text,
        marginRight:5
    },
    signup:{
        fontSize: 16,
        fontWeight:'600'
    },
    policy_cotainer:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center'
    },
    check:{
        height:16,
        width:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:8,
    }
})