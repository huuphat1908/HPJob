import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import AppLoading from 'expo-app-loading';

import { getFonts, setCustomFont } from './configs/fonts';

import Header from './components/Header';

// screens
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Profile from './screens/Profile';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const offSetTop = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

  useEffect(() => {
    setCustomFont();
  }, []);

  if (fontsLoaded) {
    return (
      <NativeRouter>
        <SafeAreaView style={{ flex: 1, paddingTop: offSetTop }}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </SafeAreaView>
      </NativeRouter >
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
