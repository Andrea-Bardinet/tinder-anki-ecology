import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TinderCard from 'react-tinder-card'


const db = [
    {
        question : "bla blabl bla blab ?",
        answer : true,
        explanation : "Amet proident ad nisi incididunt. Voluptate duis proident laborum laboris reprehenderit aute enim esse elit. Commodo sint duis sit et id veniam et nisi minim fugiat est quis ea. Deserunt dolore nisi nisi ex proident commodo irure laboris mollit cillum eu proident consequat. Nostrud nulla aute nisi labore anim elit amet.",
        sources : [
            "http://google.com/",
            "http://wikipedia.com/"
        ]
    },
    {
        question : "bla blabl bla blab ?",
        answer : true,
        explanation : "Amet proident ad nisi incididunt. Voluptate duis proident laborum laboris reprehenderit aute enim esse elit. Commodo sint duis sit et id veniam et nisi minim fugiat est quis ea. Deserunt dolore nisi nisi ex proident commodo irure laboris mollit cillum eu proident consequat. Nostrud nulla aute nisi labore anim elit amet.",
        sources : [
            "http://google.com/",
            "http://wikipedia.com/"
        ]
    },
    {
        question : "bla blabl bla blab ?",
        answer : true,
        explanation : "Amet proident ad nisi incididunt. Voluptate duis proident laborum laboris reprehenderit aute enim esse elit. Commodo sint duis sit et id veniam et nisi minim fugiat est quis ea. Deserunt dolore nisi nisi ex proident commodo irure laboris mollit cillum eu proident consequat. Nostrud nulla aute nisi labore anim elit amet.",
        sources : [
            "http://google.com/",
            "http://wikipedia.com/"
        ]
    },
]

const Home = () => {

    const onSwipe = (direction: any) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier: any) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
    )

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});