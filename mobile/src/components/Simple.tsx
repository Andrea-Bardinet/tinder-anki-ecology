import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import TinderCard from 'react-tinder-card'

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    header: {
        color: '#000',
        fontSize: 30,
        marginBottom: 30,
    },
    cardContainer: {
        width: '90%',
        maxWidth: 260,
        height: 300,
    },
    card: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 260,
        height: 300,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        color: '#000',
    },
    infoText: {
        height: 28,
        justifyContent: 'center',
        display: 'flex',
        zIndex: -100,
    }
}

const db = [
    {
        name: 'Ca va',
    },
    {
        name: 'tn lacoste',
    },
    {
        name: 'Bien ou quoi ?',
    },
    {
        name: 'Wshhhh',
    },
    {
        name: 'Janco le boss ?',
    }
]

function Simple() {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>React Native Tinder Card</Text>
            <View style={styles.cardContainer}>
                {characters.map((character) =>
                    <TinderCard key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>{character.name}</Text>
                        </View>
                    </TinderCard>
                )}
            </View>
            {lastDirection ? <Text style={styles.infoText}>You swiped {lastDirection}</Text> : <Text style={styles.infoText} />}
        </View>
    )
}

export default Simple