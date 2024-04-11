import { Image, View } from 'react-native';
import tw from 'twrnc';
import curryImg from '../assets/curry.jpg';
import Txt from './Txt';

const LatestRecipeCard = () => {
  return (
    <View style={tw`mt-8`}>
      <Image source={curryImg} alt="curry" />
      <View>
        <Txt>5 Bean Chili Stew</Txt>
        <Txt>Recipe by Mario</Txt>
      </View>
    </View>
  );
};

export default LatestRecipeCard;
