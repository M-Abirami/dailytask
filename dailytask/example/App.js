

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Colors from './app/color/config';
import Propsicon from './screens/Props ';

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: 'pink', width: 300, height: 300, alignItems: 'center' }}>
        <MaterialCommunityIcons
          name="mail"
          size={100}
          color="green"
        />
        <Propsicon Name='Abirami' PhoneNumber=' 3456789'>

        </Propsicon>

        <View style={styles.box}>
          <Text>hii.</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },

  box: {
    borderRadius: 15,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
  },
});