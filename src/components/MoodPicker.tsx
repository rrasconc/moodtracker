import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import React, {useState} from 'react';
import {MoodOptionType} from '../types';
import {theme} from '../theme';

const moods: MoodOptionType[] = [
  {emoji: '😖', description: 'anxious'},
  {emoji: '🥰', description: 'in love'},
  {emoji: '😁', description: 'happy'},
  {emoji: '😥', description: 'sad'},
  {emoji: '😤', description: 'frustrated'},
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you feeling?</Text>
      <View style={styles.moods}>
        {moods.map(currentMood => (
          <View>
            <Pressable
              style={[
                styles.moodItem,
                currentMood == selectedMood ? styles.selectedMood : undefined,
              ]}
              onPress={() => {
                setSelectedMood(currentMood);
              }}>
              <Text key={currentMood.emoji}>{currentMood.emoji}</Text>
            </Pressable>
            {currentMood == selectedMood ? (
              <Text style={styles.moodTitle}>{currentMood.description}</Text>
            ) : undefined}
          </View>
        ))}
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Record</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedMood: {
    backgroundColor: theme.colorPurple,
  },
  moodTitle: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: theme.colorWhite,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
