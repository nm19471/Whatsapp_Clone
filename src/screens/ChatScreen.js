import { View , Text, ImageBackground, StyleSheet,FlatList} from 'react-native'
import { useEffect } from 'react';
import {useNavigation,useRoute} from '@react-navigation/native';
import bg from '../../assets/images/BG.png';
import Message from '../components/Message';
import messages from '../../assets/data/messages.json'
import InputBox from '../components/InputBox';
import HeaderBox from '../components/HeaderBox';
import { Image } from 'react-native';

const ChatScreen = () => {
  const route=useRoute();
  const navigation = useNavigation();

  // navigation.setOptions({ header: { visible: false } })

  //   useEffect(()=>{
  //   navigation.setOptions({title: route.params.name})
  // },[route.params.name]);

//  console.warn(route.params.img)

  return (
    <ImageBackground source={bg} style={styles.bg}>
        <HeaderBox name={route.params.name} img={route.params.img}/>
        <FlatList
        data={messages}
        renderItem={({item})=><Message message={item}/>}
        style={styles.list}
        inverted
        />
        <InputBox/>
    </ImageBackground>
  )
}
const styles =StyleSheet.create({
    bg:{
        flex: 1,
    },
    list:{
        padding: 10,
    },
    image:{
      width: 60,
      height: 60,
      borderRadius:30,
      marginRight: 10,
  }
});
export default ChatScreen