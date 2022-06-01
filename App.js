import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter.js';
{
  /*import Greeting from './components/Greeting'; */
}

const App = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
      {/* 주석을 작성해보자*/}
      {/* <Greeting
        name={name} //이름을 설정하기
      /> */}
      {/* <Button title="토글" onPress={onPress} />
      {visible && <Box rounded={true} size="large" color="blue" />} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {flex: 1},
});

export default App;
