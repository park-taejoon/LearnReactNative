import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import Box from './components/Box';
{
  /*import Greeting from './components/Greeting'; */
}

const App = () => {
  //const [state, setState]
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView>
      {/* 주석을 작성해보자*/}
      {/* <Greeting
        name={name} //이름을 설정하기
      /> */}
      <Button title="토클" onPress={onPress} />
      {visible && <Box rounded={true} size="large" color="blue" />}
    </SafeAreaView>
  );
};

export default App;
