import MyButton from "@/components/MyButton";
import { Link } from "expo-router";
import { View, Text } from "react-native";
const Index = ()=>{
    return(
        <View style={{
            backgroundColor: '#02040a',
            flex: 1,
            justifyContent:"center"

        }}>
            <Text style={{
                alignSelf:'center',
                marginTop: 10,
                fontSize: 25,
                color: '#FFFFFF',
                fontWeight: '700',
                justifyContent: "cemter",
                marginBottom: 50
            }}>
                Pomofocus.
            </Text>
            <View style={{
                borderWidth: 5,
                backgroundColor: '#ba4949',
                borderColor: '#FFFFFF',
                margin: 20,
                padding: 10,
                marginBottom: 30
            }}>
                <Link href={'./Pomodoro'} style={{
                    color: 'white',
                    fontWeight: '800',
                    fontSize: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{ marginRight: 10 }}>Pomodoro        25 min</Text>
                </Link>
            </View>
            <View style={{
                borderWidth: 5,
                backgroundColor: '#38858A',
                borderColor: '#FFFFFF',
                margin: 20,
                padding: 10,
            }}>
                <Link href={'./Break'} style={{
                    color: 'white',
                    fontWeight: '800',
                    fontSize: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{ marginRight: 10 }}>Take Break        5 min</Text>
                </Link>
            </View>
            <View style={{
                borderWidth: 5,
                backgroundColor: '#397097',
                borderColor: '#FFFFFF',
                margin: 20,
                padding: 10,
            }}>
                <Link href={'./Todo'} style={{
                    color: 'white',
                    fontWeight: '800',
                    fontSize: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{ marginRight: 10 }}>Task Manager</Text>
                </Link>
            </View>
        </View>
    )
}

export default Index;