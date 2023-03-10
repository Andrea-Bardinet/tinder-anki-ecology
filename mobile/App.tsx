import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Simple from './src/components/Simple';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack'

const Navigation = createStackNavigator({
  Affiche: {
    screen: Home,
    navigationOptions: {
      title: 'Affichage de l\'image'
    }
  },
  // choix: {
  //   screen: ChoixImage
  // }
})

const App = () => {

  return (
    <Navigation/>
  )

}

export default App;



/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */