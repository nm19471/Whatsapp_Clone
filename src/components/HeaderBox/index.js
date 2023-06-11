import { StyleSheet } from 'react-native'
import { Text } from 'react-native';
import { Image } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context';
const HeaderBox = ({name,img}) => {
    

    
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Image 
           source={{uri: img}}
           style={styles.image}
      />
      
      <Text style={styles.txt}>{name}</Text>
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
     txt:{
       color: "black",
       fontSize: 22,
     },
     image:{
      width: 40,
      height: 40,
      borderRadius:30,
      marginRight: 10,
  },
})
export default HeaderBox

