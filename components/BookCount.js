import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types'

const BookCount=({title,count})=>(
  
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 10, color: "#FFC433" }}>
            {title}
          </Text>
          <Text>{count}</Text>
        </View>
      );

      BookCount.PropTypes={
          count:PropTypes.number,
          title:PropTypes.string.isRequired
      }


export default BookCount;