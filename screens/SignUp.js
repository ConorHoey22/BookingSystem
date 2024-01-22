import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Image,Text} from 'react-native';

import firebase from '@react-native-firebase/app';

import { FIREBASE_AUTH } from '../services/config';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = FIREBASE_AUTH;

  const handleSignUp = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can implement your authentication logic here
   

    try {
        firebase.auth().createUserWithEmailAndPassword(auth,email, password)
        .then((response) => {
          const uid = response.user.uid
          const data = {
              id: uid,
              email:email,
              password:password,
          };
          const usersRef = firebase.firestore().collection('users')
          usersRef
              .doc(uid)
              .set(data)
              .then(() => {
                  navigation.navigate('Welcome', {user: data})
              })
              .catch((error) => {
                  alert(error)
              });
      })
      .catch((error) => {
          alert(error)
      });

    }
    catch(error){
      console.log(error);
    }

  };

  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/favicon.png')} // Replace with the actual path to your image
        style={styles.logo}
      />
    <Text style={styles.title}>Sign Up</Text>    
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
      <Button title="Submit" onPress={handleSignUp} />
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

export default SignUp;