import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Image,Text} from 'react-native';

const Welcome = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can implement your authentication logic here
    
  };

  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/favicon.png')} // Replace with the actual path to your image
        style={styles.logo}
      />
    
    <View style={styles.EmailContainer}>
      <Text style={styles.title}>Email:</Text>
    </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

    <View style={styles.EmailContainer}>
      <Text style={styles.title}>Password:</Text>
    </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Submit" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  EmailContainer:{
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'flex-start', // Align the container to the left
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 80,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  leftAlign: {
    textAlign: 'left',
  },
});

export default Welcome;