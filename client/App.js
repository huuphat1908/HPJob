import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter, Routes, Route } from 'react-router-native';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import store from './redux/store';
import { getFonts, setCustomFont } from './configs/fonts';

import Header from './components/Header';

// screens
import Login from './screens/Login';
import Home from './screens/Home';
import Note from './screens/Note';
import Trash from './screens/Trash';
import Archive from './screens/Archive';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoggged, setIsLogged] = useState(false);

  useEffect(() => {
    setCustomFont();
    const handleToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          setIsLogged(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    handleToken();
  }, []);

  if (fontsLoaded) {
    if (isLoggged) {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <Login />
        </SafeAreaView>
      )
    } else return (
      <Provider store={store}>
        <NativeRouter>
          <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/note' element={<Note />} />
              <Route path='/archive' element={<Archive />} />
              <Route path='/trash' element={<Trash />} />
            </Routes>
          </SafeAreaView>
        </NativeRouter>
      </Provider >
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}
