import PopularRecipeCard from './PopularRecipeCard';
import tw from 'twrnc';
import Txt from './Txt';
import { View } from 'react-native';

const PopularRecipeList = () => {
  return (
    <View>
      <View style={tw`border-b border-gray-200`}>
        <Txt additionalStyles={tw`font-bold mt-12 pb-2`}>
          Most Popular Recipes
        </Txt>
      </View>
      <PopularRecipeCard />
    </View>
  );
};

export default PopularRecipeList;
