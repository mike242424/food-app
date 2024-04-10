import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Food App</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
