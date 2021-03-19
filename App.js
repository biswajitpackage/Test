import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Test from './Test/Test'
const Abcd=()=>{
  return(
    <View>
      <Text>Hello</Text>
      <Test data={{name:'BBB'}}/>
    </View>
  )
}
export default Abcd;