import Navbar from '../components/Navbar';
import Main from '../components/Main';
import LatestRecipesList from '../components/LatestRecipesList';
import PopularRecipeList from '../components/PopularRecipeList';
import { TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import Txt from '../components/Txt';

const Home = () => {
  return (
    <>
      <Navbar />
      <View style={tw`px-4 py-6`}>
        <Main />
        <LatestRecipesList />
        <PopularRecipeList />
        <View>
          <TouchableOpacity>
            <Txt>Load more recipes</Txt>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;
