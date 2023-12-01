import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';

const Elements = ({onValue}) => {
  // const [firstNum, setFirstNum] = useState(5);
  // const [secondNum, setSecondNum] = useState(5);
  // const handleOperation = () => setFirstNum(firstNum * 2);
  console.log('Sub component=====>');
  return (
    <View style={{alignItems: 'center'}}>
      {/* {console.log('re rendering=====>')} */}
      {/* <Text
        style={{
          fontSize: 20,
        }}>
        {firstNum}
      </Text> */}
      <TouchableOpacity onPress={onValue}>
        <Text>Add number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Elements;

const styles = StyleSheet.create({});
