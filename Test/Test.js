import React from 'react';
import {Text,View} from 'react-native';
const Aaa =(props)=>{
    const {data} =props;
    return(
        <View>
            <Text>sss  {data.name}</Text>
        </View>
    )
}
export default Aaa;