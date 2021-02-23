import React from 'react';
import { View, Image } from 'react-native';
import { Button } from "react-native-paper";
import { getAllRooms } from '../../apiCalls';
import Overview from '../Overview/Overview'

const HomePage = () => {
  const handlePress = () => {

  }
  return (
    <View 
      onPress={}
    >
      <Image 
        source={require('')}
      />
      <Overview 
        allRooms={}
      />
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    
  },
}