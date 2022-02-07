import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: React.FC = () => {
  const appContext = useAppContext();

  return (
    <View style={styles.container}>
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
