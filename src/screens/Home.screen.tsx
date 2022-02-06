import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimestamp } from '../types';
import { MoodItemRow } from '../components/MoodItemRow';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = (selectedMood: MoodOptionType) => {
    setMoodList(current => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  };

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
