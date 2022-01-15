import React, { useState, useEffect } from "react";
import { Alert, ToastAndroid, Modal } from "react-native";
import { useParams } from "react-router-native";
import { useSelector, useDispatch } from "react-redux";

import jobApi from "../api/jobApi";
import JobInfo from "../components/JobInfo";
import { PrimaryButton, PrimaryTextButton } from "../GlobalStyle";
import { getUserInfo } from "../redux/slices/userSlice";
import ListCandidate from "../components/ListCandidate";
import CloseButton from "../components/CloseButton";
import Loading from '../components/Loading';

const JobDetail = () => {
  const dispatch = useDispatch();

  const { jobId } = useParams();
  const [currentJob, setCurrentJob] = useState({
    recruiter: {
      _id: "",
    },
  });
  const [loading, setLoading] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const [updateJob, setUpdateJob] = useState(false);
  const currentUser = useSelector((state) => state.user.current);

  const handleApplyJob = async () => {
    try {
      await jobApi.applyToJob(jobId, currentUser._id);
      dispatch(getUserInfo());
      ToastAndroid.show("Apply successfully", ToastAndroid.BOTTOM);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const alertApply = () => {
    Alert.alert("Apply job", "Are you sure to apply this job?", [
      {
        text: "Cancel",
      },
      { text: "OK", onPress: () => handleApplyJob() },
    ]);
  };

  const handleModal = () => {
    setVisibleModal(!visibleModal);
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const job = await jobApi.getOneJob(jobId);
        setCurrentJob(job);
        setLoading(false);
      } catch (error) {
        alert(error.response.data.error);
      }
    };

    fetchJob();
  }, [jobId, updateJob]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Modal visible={visibleModal} animationType="slide">
          <CloseButton size="32" callback={handleModal} />
          <ListCandidate data={currentJob.candidate} job={currentJob} setUpdateJob={() => setUpdateJob(!updateJob)} />
        </Modal>
        <JobInfo job={currentJob} />
        {currentUser._id != currentJob.recruiter._id ? (
          <PrimaryButton onPress={alertApply}>
            <PrimaryTextButton>Apply</PrimaryTextButton>
          </PrimaryButton>
        ) : (
          <PrimaryButton onPress={handleModal}>
            <PrimaryTextButton>See all candidates</PrimaryTextButton>
          </PrimaryButton>
        )}
      </>
    );
  }
};

export default JobDetail;
