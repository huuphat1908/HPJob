import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

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
    if (!isLoggged) {
      return (
        <SafeAreaView style={{ flex: 1, paddingTop: offSetTop }}>
          <Login />
        </SafeAreaView>
      )
    } else return (
      <NativeRouter>
        <SafeAreaView style={{ flex: 1, paddingTop: offSetTop }}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/note' element={<Note />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/trash' element={<Trash />} />
          </Routes>
        </SafeAreaView>
      </NativeRouter>
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
