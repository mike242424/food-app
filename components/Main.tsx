import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Main = () => {
  return (
    <>
      <View>
        <TouchableOpacity>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Recipes</Text>
        <Text>For Everyone</Text>
      </View>
    </>
  );
};

export default Main;
