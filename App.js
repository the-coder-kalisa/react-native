
import React, {useState, useEffect} from 'react'
import { StatusBar, Text, View } from 'react-native';
import tw from 'twrnc'
export default function App() {
  const [currUser, setCurrUser] = useState(null);
  return (
    <View style={tw`mt-[${StatusBar.currentHeight}px] h-full w-full flex items-center justify-center`}>
      <Text style={tw`font-bold text-2xl`}>hello world!</Text>
    </View>
  );
}

