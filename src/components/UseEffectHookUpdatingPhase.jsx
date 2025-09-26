import { View, Text, Button } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';

const UseEffectHookUpdatingPhase = () => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(20);

  useEffect(() => {
    console.log('Counter updated');
  }, [counter]);
  useEffect(() => {
    console.log(' Score updated');
  }, [score]);
  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>UseEffect Hook</Text>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Counter: {counter}</Text>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Score: {score}</Text>
      <Button
        style={{ marginBottom: 10 }}
        title="Increase Counter"
        onPress={() => setCounter(counter + 1)}
      />
      <Button title="Increase Score" onPress={() => setScore(score + 5)} />
    </View>
  );
};

export default UseEffectHookUpdatingPhase;
