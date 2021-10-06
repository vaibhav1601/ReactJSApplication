import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";

const CustomActionButton = ({children,onPress,style}) => (
  <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.button,style]}>
       {children}
      </View>
    </TouchableOpacity>

);

export default CustomActionButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
          backgroundColor: "#FF0000",
          justifyContent: "center",
          height: 50,
          alignItems: "center",
  },
 
});
