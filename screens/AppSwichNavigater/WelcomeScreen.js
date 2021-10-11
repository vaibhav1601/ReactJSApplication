import React from "react";

import { Ionicons } from "@expo/vector-icons";

import colors from "../../assets/colors";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomActionButton from "../../components/CustomActionButton";

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:colors.bgMain}}>
        <View
          style={{
            flex: 1,
            borderColor: "black",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="bookmarks"
            size={150}
            color={colors.logoColor}
          ></Ionicons>

          <Text style={{ fontSize: 40, fontWeight: "100" }}>Book Worm</Text>
        </View>

        <View style={{ flex: 1, borderColor: "orange", alignItems: "center" }}>
          <CustomActionButton
            style={{
              width: 200,
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor:colors.bgAppColor,
              marginBottom:10
            }}
            title="Sign In"
            onPress={() => { this.props.navigation.navigate('HomeScreen')}}
          >
            <Text style={{ fontWeight: "100",color:'white'}}>Sign In</Text>
          </CustomActionButton>

          <CustomActionButton
            style={{
              width: 200,
              backgroundColor: "transparent",
              borderWidth: 0.5,
              borderColor: colors.bgAppColor,
            }}
            title="Sign-up"
            color="#FFFF"
            onPress={() => {
              this.props.navigation.navigate('Signup')
            }}
          >
            <Text style={{ fontWeight: "100",color:'white' }}>Sign Up</Text>
          </CustomActionButton>
        </View>
      </View>
    );
  }
}
