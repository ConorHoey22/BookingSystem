import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Image,Text} from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import auth from '@react-native-firebase/auth';
import { FIREBASE_AUTH } from '../services/config';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = FIREBASE_AUTH;



  const handleLogin = async () => {
    // Add your login logic here

    // You can implement your authentication logic here
    setLoading (true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    }
    catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
    // navigation.navigate("Welcome");
    
  }

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
        onChangeText={(text) => setEmail(text)}
        value={email}
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

      <Button title="Login" onPress={handleLogin} />

  

      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
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

export default Login;