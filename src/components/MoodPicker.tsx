import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { MoodOptionType } from '../types';

const moods: MoodOptionType[] = [
  { emoji: '👨‍💻', description: 'studious' },
  { emoji: '🥰', description: 'in love' },
  { emoji: '😁', description: 'happy' },
  { emoji: '😥', description: 'sad' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();
  return (
    <View style={styles.moods}>
      {moods.map(currentMood => (
        <Pressable
          onPress={() => {
            setSelectedMood(currentMood);
          }}>
          <Text key={currentMood.emoji}>{currentMood.emoji}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
