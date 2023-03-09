import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    current_page_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50,
        paddingHorizontal: 16
    },
    item: {
        marginHorizontal: 16
    },
    img: {
        width: width - 32,
        height: width - 32
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        textAlign:'center',
        marginTop:20
    },
    description:{
        fontSize:14,
        fontWeight:'500',
        color: Colors.gray_text,
        textAlign:'center',
        width:'85%',
        alignSelf:'center',
        marginTop:15
    },
    button:{
        alignSelf:'center',
        backgroundColor: Colors.orange,
        width: width*0.7,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        flexDirection:'row',
        borderRadius:133
    },
    text:{
        fontSize:16,
        color:Colors.white,
        fontWeight:'600',
        marginRight:5
    },
    skip:{
        fontSize:16,
    },
    current_page:{
        fontSize:16,
    }
})