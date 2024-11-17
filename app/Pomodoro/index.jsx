import { Link } from "expo-router";
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from '../../components/MyButton';

function Pomodoro() {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
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
    setTimeRemaining(25 * 60);
    setIsRunning(false);
  };
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ba4949',
      flexDirection: 'column',
      alignItems: 'space-evenly',
    }}>
      <Text style={{
          alignSelf:'center',
          marginTop: 10,
          fontSize: 25,
          color: '#FFFFFF',
          fontWeight: '700',
          justifyContent: "cemter",
          marginBottom: 50
        }}>Pomodoro</Text>
      <View style={styles.container}>
      <Text style={styles.timer}>{formatTime()}</Text>
      <View style={styles.controls}>
        <MyButton
          title="Start"
          onPress={handleStart}
          disabled={isRunning}
          Colors= '#ba4949'
        />
        <MyButton
          title="Pause"
          onPress={handlePause}
          disabled={!isRunning}
          Colors= '#ba4949'
        />
        <MyButton
          title="Reset"
          onPress={handleReset}
          Colors= '#ba4949'
        />
      </View>
      </View>
      <View style={{
                borderWidth: 5,
                backgroundColor: '#38858A',
                borderColor: '#FFFFFF',
                margin: 20,
                padding: 10,
            }}>
                <Link href={'../Break'} style={{
                    color: 'white',
                    fontWeight: '800',
                    fontSize: 25,
                }}>
                    <Text style={{ marginRight: 10 }}>Take Break         5 min</Text>
                </Link>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#c25c5c',
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
    color:'#FFFFFF'
  },
  controls: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default Pomodoro;