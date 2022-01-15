import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-native";
import * as SecureStore from "expo-secure-store";
import { Modal } from 'react-native';

import { persistLogin, getUserInfo } from "../redux/slices/userSlice";
import { getAllJobTitle } from "../redux/slices/jobTitleSlice";
import { getAllCity } from "../redux/slices/citySlice";
import jobApi from "../api/jobApi";
import ListJob from "../components/ListJob";
import Filter from '../components/Filter';
import FilterJob from "../components/FilterJob";
import CloseButton from '../components/CloseButton';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [jobs, setJobs] = useState([]);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const fetchJob = async () => {
    try {
      const jobList = await jobApi.getAllJob();
      setJobs(jobList);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleFilter = () => {
    setVisibleFilter(!visibleFilter);
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        dispatch(persistLogin(token));
      } else {
        navigate("/login");
      }
    };
    if (!isLoggedIn) {
      checkToken();
    } else {
      dispatch(getUserInfo());
      dispatch(getAllJobTitle());
      dispatch(getAllCity());
      fetchJob();
    }
  }, [isLoggedIn]);

  return (
    <>
      <Modal visible={visibleFilter} animationType='slide'>
        <CloseButton 
          size='32'
          callback={handleFilter}
        />
        <FilterJob />
      </Modal>
      <Filter
        title='Filter job'
        callback={handleFilter}
      />
      <ListJob data={jobs} loading={loading} noItemFoundTitle="No job" />
    </>
  );
};

export default Home;
