import { StyleProp, Text, TextStyle } from 'react-native';
import tw from 'twrnc';

type TxtProps = {
  children: React.ReactNode;
  additionalStyles?: StyleProp<TextStyle>;
};

const Txt = ({ children, additionalStyles }: TxtProps) => {
  return <Text style={[tw`text-gray-600`, additionalStyles]}>{children}</Text>;
};

export default Txt;
