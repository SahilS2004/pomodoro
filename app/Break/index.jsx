import { Link } from "expo-router";
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from '../../components/MyButton';

function Break() {
  const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsRunning(false);
      alert('Time is up!');
    }
  }, [timeRemaining]);

  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeRemaining(5 * 60);
    setIsRunning(false);
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#38858A'
    }}>
        <Text style={{
                alignSelf:'center',
                marginTop: 10,
                fontSize: 25,
                color: '#FFFFFF',
                fontWeight: '700',
                justifyContent: "cemter",
                marginBottom: 50
            }}>Let's Take Break
        </Text>
        <View style={styles.container}>
      <Text style={styles.timer}>{formatTime()}</Text>
      <View style={styles.controls}>
        <MyButton
          title="Start"
          onPress={handleStart}
          disabled={isRunning}
          Colors= '#38858A'
        />
        <MyButton
          title="Pause"
          onPress={handlePause}
          disabled={!isRunning}
          Colors= '#38858A'
        />
        <MyButton
          title="Reset"
          onPress={handleReset}
          Colors= '#38858A'
        />
      </View>
      </View>
      <View style={{
                borderWidth: 5,
                backgroundColor: '#ba4949',
                borderColor: '#FFFFFF',
                margin: 20,
                padding: 10,
            }}>
                <Link href={'../Pomodoro'} style={{
                    color: 'white',
                    fontWeight: '800',
                    fontSize: 25,
                    justifyContent:'space-between'
                }}>
                    <Text style={{ marginRight: 10 }}>Pomodoro ------------ 25 min</Text>
                </Link>
            </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: '#4f9296',
        height: 400,
        margin: 10,
        justifyContent:'center',
        marginBottom: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timer: {
      fontSize: 64,
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
    controls: {
      flexDirection: 'row',
      marginTop: 20,
    },
  });

export default Break;