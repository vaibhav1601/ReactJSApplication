import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput, View
} from "react-native";
import BookCount from "../components/BookCount";
import CustomActionButton from "../components/CustomActionButton";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      mTotalCount: 0,
      mTotalReading: 0,
      mTotalRead: 0,
      isBookAdded: false,
      mTxtInputData: "",
      books: [],
    };
  }

  showBook = () => {
    this.setState({ isBookAdded: true });
  };

  hideBook = () => {
    this.setState({ isBookAdded: false });
  };

  addBook = (book) => {
    this.setState(
      (state, props) => ({
        books: [...state.books, book],
        mTotalCount: state.mTotalCount + 1,
        mTotalReading: state.mTotalReading + 1,
      }),
    );
  };

  mMarkAsReadBook = (mSelectBook, index) => {
    let newList = this.state.books.filter((book) => book !== mSelectBook);

    this.setState((prevState) => ({
      books: newList,
      mTotalReading: prevState.mTotalReading - 1,
      mTotalRead: prevState.mTotalRead + 1,
    }));
  };

  renderItem = (item, index) => (
    <View style={{ height: 50, flexDirection: "row", paddingLeft: 10 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 10 }}>{item}</Text>
      </View>

      <CustomActionButton
        style={styles.markAsReadButton}
        onPress={() => this.mMarkAsReadBook(item, index)}
      >
        <Text style={styles.markAsReadText}>Mark as read</Text>
      </CustomActionButton>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View style={styles.Header}>
          <Text style={styles.HeaderTitleTXT}>Book Worm</Text>
        </View>

        {this.state.isBookAdded && (
          <View style={{ flex: 1 }}>
            <View style={{ height: 50, flexDirection: "row" }}>
              <TextInput
                onChangeText={(text) => this.setState({ mTxtInputData: text })}
                style={styles.TextInputStyle}
                placeholder="Enter Book name"
                placeholderTextColor="grey"
              ></TextInput>

              <CustomActionButton
                style={{ backgroundColor: "#a5deba" }}
                onPress={() => this.addBook(this.state.mTxtInputData)}
              >
                <Ionicons name="checkmark" color="white" size={40}></Ionicons>
              </CustomActionButton>

              <CustomActionButton onPress={() => this.hideBook()}>
                <Ionicons name="close" color="white" size={40}></Ionicons>
              </CustomActionButton>
            </View>
          </View>
        )}

        <FlatList
          data={this.state.books}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View style={{ marginTop: 50, alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}> Not reading any book </Text>
            </View>
          }
        />

        <CustomActionButton

        position="right"
          style={{backgroundColor: "#a5deba",borderRadius:25,marginBottom:50}}
          onPress={this.showBook}
        >
          <Text style={styles.AddButtonTxt}>+</Text>
        </CustomActionButton>

        <View style={{ flex: 1 }}></View>
        <View style={styles.Footer}>
          <BookCount title="Total" count={this.state.mTotalCount} />
          <BookCount title="Read" count={this.state.mTotalRead} />
          <BookCount title="Reading" count={this.state.mTotalReading} />
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  markAsReadButton: {
    width: 150,
    backgroundColor: "#AAD1E6",
    justifyContent: "center",
    height: 50,
    alignItems: "center",
  },

  markAsReadText: {
    fontWeight: "bold",
    color: "white",
  },

  AddButtonView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#AAD1E6",
    alignItems: "center",
    justifyContent: "center",
  },

  Footer: {
    height: 70,
    borderTopWidth: 0.5,
    justifyContent: "center",
    flexDirection: "row",
    borderTopColor: "#E9E9E9",
  },
  Header: {
    height: 70,
    borderBottomWidth: 0.9,
    borderBottomColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center",
  },

  HeaderTitleTXT: {
    fontSize: 24,
    textAlign: "justify",
    marginTop: 10,
  },

  TextInputStyle: {
    flex: 1,
    backgroundColor: "#ececec",
    paddingLeft: 5,
  },
  AddButtonTxt: {
    color: "white",
    fontSize: 25,
    alignContent: "center",
    justifyContent: "center",
  },

 BackgroundColour:
 {
color:'#E9E9E9'

 },

  BorderRadious: {
    borderRadius: 25,
  },
});
