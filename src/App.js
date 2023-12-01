import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import React, {useState, useCallback, memo, useMemo} from 'react';
import Elements from './Elements';
import data from './data';

function Label({title}) {
  console.log(`rendered: ${title}`);
  return <Text>{title}</Text>;
}

const LabelMemo = memo(Label);

const App = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState();
  const rateCompare = 3;
  // const [secondNum, setSecondNum] = useState(5);

  const computedValue = useMemo(() => {
    // supposed computationally intensive calculation
    const result = data.filter(d => d.rating > rateCompare);
    console.log('result====?', result);
    return result;
  }, [rateCompare]);

  console.log('Main component====>');
  // const handleOperation = useCallback(() => setFirstNum(firstNum * 2), []);
  const renderItem = ({item}) => (
    <View>
      <Text>{item.state}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {/* <Button
        title={`Pressed ${count} times`}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <LabelMemo title="Label with memo" />
      <Label title="Label" /> */}
      {/* <Text style={styles.textStyle}>App</Text> */}
      {/* <TouchableOpacity onPress={() => setFirstNum(firstNum * 2)}> */}
      {/* <Text>{firstNum}</Text> */}
      {/* </TouchableOpacity> */}
      {/* <Elements onValue={handleOperation} /> */}
      {/* <Text style={styles.textStyle}>Add First</Text> */}
      {/* </Elements> */}
      {/* <Elements setValue={setSecondNum} value={secondNum}>
        <Text style={styles.textStyle}>Add Second</Text>
      </Elements> */}
      <FlatList
        data={computedValue}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
  },
});
