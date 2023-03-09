import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: Colors.transparent,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    sub_title: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 30,
        marginBottom: 10
    },
    delivery_block: {
        marginTop: 10,
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 1
        },
        shadowRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    delivery_left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    check: {
        marginRight: 15,
        height: 24,
        width: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    delivery_name: {
        fontSize: 16,
        fontWeight: '500'
    },
    delivery_phone: {
        fontSize: 12,
        color: Colors.gray_text,
        marginVertical: 5
    },
    delivery_address: {
        fontSize: 12,
        color: Colors.gray_text
    },
    edit: {
        padding: 5
    },
    billing_container: {
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
            height: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        paddingVertical: 16,
        borderRadius: 15
    },
    fee: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 16,
    },
    fee_text: {
        fontSize: 14,
        color: Colors.gray_text
    },
    fee_price: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.black_text
    },
    line: {
        backgroundColor: Colors.border,
        height: 1,
        width: width - 32,
        marginTop: 5,
        marginBottom: 10
    },
    payment_item: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 70,
        backgroundColor: Colors.white,
        borderRadius: 15
    },
    check_green: {
        height: 19,
        width: 19,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.white,
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0
    },
    item_container: {
        height: 63,
        width: 70,
        justifyContent: 'flex-end',
        marginRight: 8,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.orange,
        width: width * 0.7,
        alignSelf: 'center',
        borderRadius: 50,
        paddingVertical: 8,
        paddingLeft: 8,
        marginTop:40
    },
    arrow: {
        height: 38,
        width: 38,
        borderRadius: 19,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: '600',
        width: width * 0.7 - 16 - 38,
        textAlign: 'center'
    }
})