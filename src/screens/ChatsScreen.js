import {View, Text, FlatList} from 'react-native'
import chats from '../../assets/data/chats.json'
import ChatlistItem from '../components/ChatListItem';

const ChatsScreen = () => {
  return (
   <FlatList data={chats} renderItem={({item})=> <ChatlistItem chat={item}/>}
   
   />
  )
}

export default ChatsScreen;