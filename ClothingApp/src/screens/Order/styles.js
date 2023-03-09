import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
        paddingTop: 10,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20
    },
    status_container: {
        flexDirection: 'row',
        marginBottom:30
    },
    status_item: {
        width: (width - 32) / 2,
        alignItems:'center',
        paddingTop:15,
    },
    status_text:{
        fontSize:14,
        paddingBottom:15
    },
    border_bottom:{
        width: (width - 32) / 2
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
    date:{
        fontSize:12,
        color: Colors.gray_text
    }
})