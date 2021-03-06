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
import JobTitle from './screens/JobTitle';
import Job from './screens/Job';
import JobDetail from './screens/JobDetail';
import City from './screens/City';
import Candidate from './screens/Candidate';
import User from './screens/User';

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
            <Route path='/job' element={<Job />} />
            <Route path='/job/:jobId' element={<JobDetail />} />
            <Route path='/candidate/:candidateId' element={<Candidate />} />
            
            <Route path='/admin/job-title' element={<JobTitle />} />
            <Route path='/admin/city' element={<City />} />
            <Route path='/admin/user' element={<User />} />
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
