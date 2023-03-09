import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.transparent,
        paddingTop: 10
    },
    block: {
        marginHorizontal: 16
    },
    title: {
        marginTop: 20,
        fontSize: 32,
        fontWeight: '600',
    },
    subtitle: {
        marginTop: 10,
        fontSize: 18,
        color: Colors.gray_text
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
        borderRadius: 10
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
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    categories_item: {
        width: (width - 16 * 5) / 4,
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15,
        backgroundColor: Colors.white,
        borderWidth: 1,
    },
    categories_img: {
        marginBottom: 10
    },
    categories_text: {
        fontSize: 12,
        fontWeight: '500'
    },
    title_list: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title_list_text: {
        fontSize: 20,
        fontWeight: '500'
    },
    see_all: {
        fontSize: 14,
        color: Colors.gray_text
    },
    list: {
        paddingLeft: 16,
        marginTop: 20
    },
    modal_container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end'
    },
    modal_content: {
        backgroundColor: Colors.transparent,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: 20,
        paddingBottom: 50
    },
    modal_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        paddingHorizontal: 16,
    },
    clear: {
        fontSize: 14,
        fontWeight: '300',
        color: Colors.black_text
    },
    modal_title: {
        fontSize: 19,
        color: Colors.black_text,
        fontWeight: '600'
    },
    close: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sub_title: {
        fontSize: 18,
        color: Colors.black_text,
        fontWeight: '600',
        marginTop: 10
    },
    category_list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    modal_item_name: {
        fontSize: 12,
        fontWeight: '500'
    },
    modal_item: {
        backgroundColor: Colors.orange,
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 5
    },
    price_text_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },
    price_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: Colors.white,
        borderRadius: 10,
        backgroundColor: Colors.orange,
    },
    price: {
        fontSize: 12,
        fontWeight: '500',
    },
    text: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '600'
    },
    button: {
        backgroundColor: Colors.orange,
        alignItems: 'center',
        width: width * 0.6,
        alignSelf: 'center',
        paddingVertical: 16,
        borderRadius: 50,
        marginTop: 30
    },
    bubble: {
        height: 33.66,
        width: 60,
        position: "absolute",
        top: -40,
        left: -23,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            height: 1
        },
        shadowOpacity: 0.3,
    },
    bubble_text: {
        fontSize: 12,
        marginBottom: 5
    }
})