import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.transparent,
        paddingTop:20
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:16,
        marginBottom:50
    },
    avatar:{
        height:71,
        width:71,
        borderRadius:40,
        marginRight:15
    },
    name:{
        fontSize:18,
        fontWeight:"600",
        letterSpacing:0.5
    },
    job:{
        fontSize:14,
        color: Colors.gray_text,
        marginTop:10
    },
    right_arrow:{
        marginLeft:15,
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        marginBottom:10,
        paddingVertical:10,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        width: width*0.5
    },
    item_name:{
        fontSize:14,
        marginLeft:15
    },
    logo:{
        position:'absolute',
        bottom:30,
        left:16
    }
})