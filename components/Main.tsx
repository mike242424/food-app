import { TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import Txt from './Txt';

const Main = () => {
  return (
    <View>
      <View style={tw`flex-row`}>
        <TouchableOpacity>
          <Txt>Log in</Txt>
        </TouchableOpacity>
        <TouchableOpacity>
          <Txt>Sign up</Txt>
        </TouchableOpacity>
      </View>
      <View>
        <Txt
          additionalStyles={tw`text-gray-700 text-6xl font-semibold mt-6 mb-3`}
        >
          Recipes
        </Txt>
        <Txt additionalStyles={tw`text-2xl font-semibold`}>For Everyone</Txt>
      </View>
    </View>
  );
};

export default Main;
