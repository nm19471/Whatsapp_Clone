import { View,Image,Text ,StyleSheet,Pressable} from "react-native";

const ContactListItem = ({user})=>{

    return (
        <Pressable 
         style={styles.container}
        >
            <Image 
           source={{uri: user.image}}
           style={styles.image}
            />
            <View style={styles.content}>   
            <Text numberOfLines={1} style={styles.name}>{user.name}</Text>
            <Text style={styles.subTitle}>{user.status}</Text>
            </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: 'center'
    },
    image:{
        width: 60,
        height: 60,
        borderRadius:30,
        marginRight: 10,
    },
    content: {
        flex: 1,

        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray',
    },
    
    name: {
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'gray',
    },
});

export default ContactListItem;