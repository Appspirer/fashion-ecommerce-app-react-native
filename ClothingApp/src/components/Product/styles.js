import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 15,
        width: (width - 16 * 3) / 2,
        alignItems: 'center'
    },
    img_container: {
        width: (width - 16 * 3) / 2 - 16,
        marginTop: 8,
        alignItems: 'center',
        borderRadius: 15
    },
    img:{
        marginTop:5,
        height:132,
        width:95
    },
    name:{
        fontSize:12,
        letterSpacing:1,
        marginTop:10
    },
    price:{
        fontSize:12,
        fontWeight:'600',
        marginTop:5,
        marginBottom:8
    },
    favorite:{
        position:'absolute',
        backgroundColor: Colors.white,
        height:25,
        width:25,
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center',
        right:8,
        top:8,
        shadowColor: Colors.black,
        shadowOpacity:0.1,
        shadowOffset:{
            height:1
        }
    }
})