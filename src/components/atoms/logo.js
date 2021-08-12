
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 5
    },
    logo: {
      width: 40,
      height: 40
    }
});

export default Logo;