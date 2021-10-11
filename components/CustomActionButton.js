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

import PropTypes from "prop-types";

function getPosition(position) {
  switch (position) {
    case "left":
      return {
        position: "absolute",
        left: 20,
        bottom: 20,
      };
    default:
      return {
        position: "absolute",
        right: 20,
        bottom: 20,
      };
  }
}

const CustomActionButton = ({ children, onPress, style, position }) => {
  const FlotingActionButtion = position ? getPosition(position) : [];
  return (
    <TouchableOpacity style={FlotingActionButtion} onPress={onPress}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};

CustomActionButton.PropTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  styles: PropTypes.style,
};

CustomActionButton.defaultProptypes = {
  style: {},
};

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
