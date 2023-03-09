import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
        paddingTop: 10
    },
    bg: {
        width: width,
        height: width * 220 / 375,
        marginTop: -60,
        paddingTop: 60
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    avatar: {
        alignSelf: "center",
        marginTop: height * 0.1 - 60,
        height: 135,
        width: 135
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 15,
        alignSelf: 'center'
    },
    email: {
        fontSize: 16,
        color: Colors.gray_text,
        textAlign: 'center',
        marginTop: 5
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20
    },
    item: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: (width - 32 - 20) / 3,
        alignItems:'center',
        paddingVertical:10,
        shadowColor:Colors.black,
        shadowOffset:{
            height:1
        },
        shadowOpacity:0.1,
        shadowRadius:3
    },
    icon:{
        height:45,
        width:45,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.orange_7,
        marginBottom:13
    },
    item_name:{
        fontSize:12,
        fontWeight:'500',
        color: Colors.gray_text
    },
    item_details:{
        fontSize:14,
        fontWeight:'500',
        marginTop:10
    },
    subtitle:{
        fontSize:18,
        color: Colors.black_text,
        fontWeight:'600',
        marginTop:50,
        marginLeft:16
    },
    block_info:{
        marginHorizontal:16,
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:Colors.white,
        borderWidth:1,
        borderColor: Colors.border,
        borderRadius:10,
        marginTop:5
    },
    row:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15
    },
    text_left:{
        fontSize:12,
        color: Colors.gray_text
    },
    text_right:{
        fontSize:12,
        color: Colors.black_text,
        fontWeight:'500'
    }
})