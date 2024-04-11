import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import Txt from './Txt';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
};

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Navbar = () => {
  const nav = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View>
      <View style={tw`p-4 border-b border-gray-100`}>
        <Txt additionalStyles={tw`font-bold uppercase`}>Food App</Txt>
      </View>
      <View>
        <TouchableOpacity onPress={() => nav.navigate('Home')}>
          <Txt additionalStyles={tw`text-gray-700 font-bold`}>Home</Txt>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('About')}>
          <Txt>About</Txt>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Contact')}>
          <Txt>Contact</Txt>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
