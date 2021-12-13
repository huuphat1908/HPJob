import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter, Routes, Route } from 'react-router-native';
import AppLoading from 'expo-app-loading'; 

import store from './redux/store';
import { getFonts, setCustomFont } from './configs/fonts';

// screens
import Header from './components/Header';

import Home from './screens/Home';
import Note from './screens/Note';
import Trash from './screens/Trash';
import Archive from './screens/Archive';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    setCustomFont();
  }, []);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View>
            <Header />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/note' element={<Note />} />
              <Route path='/archive' element={<Archive />} />
              <Route path='/trash' element={<Trash />} />
            </Routes>
          </View>
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
