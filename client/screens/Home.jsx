import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-native";
import * as SecureStore from "expo-secure-store";

import { persistLogin, getUserInfo } from "../redux/slices/userSlice";
import { getAllJobTitle } from "../redux/slices/jobTitleSlice";
import { getAllCity } from "../redux/slices/citySlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        dispatch(persistLogin(token));
      } else {
        navigate("/login");
      }
    };
    if (!isLoggedIn) {
      checkToken();
    }
    dispatch(getUserInfo());
    dispatch(getAllJobTitle());
    dispatch(getAllCity());
  }, [isLoggedIn]);

  return (
    <View>
      <Text>Home page</Text>
    </View>
  );
};

export default Home;
