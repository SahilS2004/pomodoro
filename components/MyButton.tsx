import { Colors } from '@/constants/Colors'
import { Text, TouchableOpacity } from 'react-native'

const MyButton = ({title, onPress, Colors}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{backgroundColor:'white', padding:10, width: 100, margin:10, justifyContent:'center', alignItems:'center', borderRadius:5}}>
      <Text style={{fontWeight: 'bold', fontSize:20, color:`${Colors}`}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton;