import Navbar from '../components/Navbar';
import Main from '../components/Main';
import LatestRecipesList from '../components/LatestRecipesList';
import PopularRecipeList from '../components/PopularRecipeList';
import { Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <LatestRecipesList />
      <PopularRecipeList />
      <View>
        <TouchableOpacity>
          <Text>Load more recipes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
