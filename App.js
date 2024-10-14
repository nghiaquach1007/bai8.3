import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';

// Get the screen dimensions
const { width, height } = Dimensions.get('window');

// Define your slides data
const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'MY APP1',
    image: { uri: 'https://cdn.glitch.global/f4fd9c82-4361-41ab-94cf-c5f1e6cc98d3/e2e2965c-f61f-4ff7-9fe6-926510789cfa.image.png?v=1728901539153' },
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'MY APP2',
    image: { uri: 'https://cdn.glitch.global/f4fd9c82-4361-41ab-94cf-c5f1e6cc98d3/c72ff219-bdd6-4fc9-b965-eb70d6d16a7a.image.png?v=1728901539153' },
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Title 3',
    text: 'MY APP3',
    image: { uri: 'https://cdn.glitch.global/f4fd9c82-4361-41ab-94cf-c5f1e6cc98d3/552f864e-1dcc-424f-aff4-d09e7a1cae09.image.png?v=1728901539451' },
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    };
  }

  // Function to render each slide item
  _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  // Function called when user finishes the intro
  _onDone = () => {
    this.setState({ showRealApp: true });
  };

  // Render next button with icon
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward"  // Updated icon name
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  // Render done button with icon
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="checkmark"  // Updated icon name
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  // Main render function
  render() {
    if (this.state.showRealApp) {
      // Replace this with your main app component
      return (
        <View style={styles.center}>
          <Text style={styles.text}>Welcome to the Real App!</Text>
        </View>
      );
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this._renderDoneButton}
          onDone={this._onDone}
        />
      );
    }
  }
}

// Define styles
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,    // Set width to full screen width
height: height * 0.5, // Adjust height as necessary
    resizeMode: 'cover', // Use 'cover' for full-screen effect
    position: 'absolute', // Position absolute to overlap the text
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    position: 'absolute', // Position absolute to overlap the image
    bottom: 50, // Adjust as needed
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});