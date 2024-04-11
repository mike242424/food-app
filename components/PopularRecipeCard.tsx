import { Image, Text, View } from 'react-native';
import tw from 'twrnc';
import noodlesImg from '../assets/noodles.jpg';
import Txt from './Txt';

const PopularRecipeCard = () => {
  return (
    <View style={tw`mt-8`}>
      <Image source={noodlesImg} alt="noodles" />
      <View>
        <Txt>5 Bean Chili Stew</Txt>
        <Txt>Recipe by Mario</Txt>
      </View>
    </View>
  );
};

export default PopularRecipeCard;
