import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

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
    <View style={tw`flex-row bg-red-300 justify-between p-5`}>
      <View>
        <Text style={tw`text-4xl text-white font-bold`}>Food App</Text>
      </View>
      <View style={tw`flex-row px-3 items-center`}>
        <TouchableOpacity onPress={() => nav.navigate('Home')}>
          <Text style={tw`text-white font-bold`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('About')}>
          <Text style={tw`ml-2 text-white font-bold`}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Contact')}>
          <Text style={tw`ml-2 text-white font-bold`}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
