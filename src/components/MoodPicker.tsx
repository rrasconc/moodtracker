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
import Reanimated, {
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

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

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{ scale: selectedMood ? withTiming(1) : withTiming(0) }],
    }),
    [selectedMood],
  );

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
        contentContainerStyle={styles.moodListContainer}
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
      <ReanimatedPressable
        style={[styles.button, buttonStyle]}
        onPress={handleSelect}>
        <Text style={styles.buttonText}>Record</Text>
      </ReanimatedPressable>
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
    margin: 10,
  },
  selectedMood: {
    backgroundColor: theme.colorPurple,
  },
  moodTitle: {
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyBold,
    textAlign: 'center',
  },
  container: {
    height: 250,
    backgroundColor: theme.colorWhite,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyBold,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
  moodDisplay: {
    fontSize: 40,
  },
  moodListContainer: {
    alignItems: 'center',
  },
});
