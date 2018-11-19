//Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#007aaf',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make it available to other parts
export default Header;
