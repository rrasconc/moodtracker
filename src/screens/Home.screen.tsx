import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const Home: React.FC = () => {
  const appContext = useAppContext();
  const lastIndex = appContext.moodList.length - 1;
  const lastMood = appContext.moodList[lastIndex];

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
      <Text style={styles.text}>Latest mood</Text>
      {lastMood ? (
        <MoodItemRow item={lastMood} key={lastMood.timestamp} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
    padding: 10,
  },
});
