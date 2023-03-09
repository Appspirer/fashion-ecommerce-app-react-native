import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
        paddingHorizontal:16
    },
    check_container: {
        backgroundColor: Colors.transparent,
        borderWidth: 15,
        borderColor: Colors.orange,
        height: width * 0.6,
        width: width * 0.6,
        alignSelf:'center',
        marginTop: height*0.1,
        borderRadius:width,
        justifyContent:'center',
        alignItems:'center'
    },
    check:{
        backgroundColor: Colors.orange_10,
        height:width*0.25,
        width:width*0.25,
        borderRadius:width,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'500',
        marginTop:height*0.1,
        textAlign:'center',
        marginBottom:15
    },
    description:{
        fontSize:14,
        color: Colors.gray_text,
        textAlign:'center',
        width:'80%',
        alignSelf:'center',
        marginBottom:5
    },
    button:{
        width: width*0.7,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:15,
        borderRadius:50,
        marginTop:15
    },
    text:{
        fontSize:16,
        fontWeight:'500'
    }
})