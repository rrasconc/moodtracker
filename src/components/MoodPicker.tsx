import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { MoodOptionType } from '../types';
import { theme } from '../theme';

const moods: MoodOptionType[] = [
  { emoji: '😖', description: 'Anxious' },
  { emoji: '🥰', description: 'In love' },
  { emoji: '😁', description: 'Happy' },
  { emoji: '😥', description: 'Sad' },
  { emoji: '😤', description: 'Frustrated' },
];

type MoodPickerProps = {
  handleSelectMood: (mood: MoodOptionType) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({ handleSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

  const handleSelect = () => {
    if (selectedMood) {
      handleSelectMood(selectedMood);
      setSelectedMood(undefined);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you feeling?</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={moods}
        keyExtractor={item => item.emoji}
        renderItem={({ item }) => (
          <View key={item.emoji}>
            <Pressable
              style={[
                styles.moodItem,
                item == selectedMood ? styles.selectedMood : undefined,
              ]}
              onPress={() => {
                setSelectedMood(item);
              }}>
              <Text key={item.emoji} style={styles.moodDisplay}>
                {item.emoji}
              </Text>
            </Pressable>
            {item == selectedMood ? (
              <Text style={styles.moodTitle}>{item.description}</Text>
            ) : undefined}
          </View>
        )}
      />
      <Pressable style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Record</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
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
  moodDisplay: {
    fontSize: 40,
  },
});
