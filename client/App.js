import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import AppLoading from 'expo-app-loading';

import { getFonts, setCustomFont } from './configs/fonts';

import Header from './components/Header';
import GlobalStyle from './GlobalStyle';

// screens
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Profile from './screens/Profile';
import ChangePassword from './screens/ChangePassword';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    setCustomFont();
  }, []);

  if (fontsLoaded) {
    return (
      <NativeRouter>
        <SafeAreaView style={{ flex: 1, paddingTop: GlobalStyle.offSetTop }}>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/change-password' element={<ChangePassword />} />
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
