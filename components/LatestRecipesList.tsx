import LatestRecipeCard from './LatestRecipeCard';
import tw from 'twrnc';
import Txt from './Txt';
import { View } from 'react-native';

const LatestRecipesList = () => {
  return (
    <View>
      <View style={tw`border-b border-gray-200`}>
        <Txt additionalStyles={[tw`font-bold mt-12 pb-2`]}>Latest Recipes</Txt>
      </View>
      <LatestRecipeCard />
    </View>
  );
};

export default LatestRecipesList;
