import { View, TextInput,StyleSheet } from 'react-native'
import {AntDesign , MaterialIcons} from '@expo/vector-icons'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
const InputBox = () => {
    const [text,setText]=useState('');
    const onsend=()=>{
        console.warn('Sending a new message',text);
        setText('');
    }
    
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <AntDesign name='plus' size={20} color='royalblue'/>

      <TextInput value={text} style={styles.input} onChangeText={setText} placeholder="Message" />

      <MaterialIcons onPress={onsend} style={styles.send} name='send' size={16} color='white'/>

    </SafeAreaView>
  )
}
const styles =StyleSheet.create({
     container:{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',

     },
     input: {
        flex: 1,
        backgroundColor: 'white',
        padding:5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth,
     },
     send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
     },
})
export default InputBox

