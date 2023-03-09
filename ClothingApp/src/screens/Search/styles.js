import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.transparent,
        paddingTop:10
    },
    search_container: {
        marginTop: 30,
        backgroundColor: Colors.white,
        width: width - 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingLeft: 16,
        paddingRight: 8,
        borderRadius: 10,
        alignSelf:'center'
    },
    input: {
        width: width - 138,
        height: 43
    },
    filter: {
        height: 43,
        width: 47,
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    recent_search:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 20,
        paddingHorizontal:16,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor: Colors.border
    },
    recent_text:{
        fontSize:16,
        fontWeight:'600'
    },
    result:{
        fontSize:16,
        fontWeight:'600',
        marginLeft:16, 
        marginTop:10
    },
    list:{ 
        marginHorizontal: 16, 
        paddingTop: 10, 
        marginTop: 20 
    }
})