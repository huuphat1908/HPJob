import React, { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ListItem from "../components/ListItem";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { PrimaryButton, PrimaryTextButton } from "../GlobalStyle";
import jobTitleApi from "../api/jobTitleApi";
import { getAllJobTitle } from "../redux/slices/jobTitleSlice";

const JobTitle = () => {
  const dispatch = useDispatch();

  const jobTitles = useSelector((state) => state.jobTitle.current);
  const [visibleAddModal, setVisibleAddModal] = useState(false);
  const [visibleEditModal, setVisibleEditModal] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [editableJobTitle, setEditableJobTitle] = useState({
    id: "",
    title: "",
  });
  const [jobTitleQuery, setJobTitleQuery] = useState("");
  const [jobTitleQueryList, setJobTitleQueryList] = useState([]);

  const handleAddModal = () => {
    setVisibleAddModal(!visibleAddModal);
  };

  const handleEditModal = (value, id) => {
    setVisibleEditModal(!visibleEditModal);
    if (value) {
      setEditableJobTitle({
        ...editableJobTitle,
        title: value,
        id,
      });
    }
  };

  const addJobTitle = async () => {
    try {
      await jobTitleApi.createJobTitle(jobTitle);
      ToastAndroid.show("Add successfully", ToastAndroid.BOTTOM);
      setJobTitle("");
      dispatch(getAllJobTitle());
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const editJobTitle = async () => {
    try {
      await jobTitleApi.modifyJobTitle(
        editableJobTitle.id,
        editableJobTitle.title
      );
      ToastAndroid.show("Edit successfully", ToastAndroid.BOTTOM);
      setJobTitleQuery("");
      dispatch(getAllJobTitle());
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const deleteJobTitle = async (id) => {
    try {
      await jobTitleApi.deleteJobTitle(id);
      ToastAndroid.show("Delete successfully", ToastAndroid.BOTTOM);
      setJobTitleQuery("");
      dispatch(getAllJobTitle());
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };

  useEffect(async () => {
    if (jobTitleQuery) {
      try {
        const jobTitleQueryListResponse = await jobTitleApi.searchJobTitle(
          jobTitleQuery
        );
        setJobTitleQueryList(jobTitleQueryListResponse);
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  }, [jobTitleQuery]);

  return (
    <>
      <Modal
        visible={visibleAddModal}
        handleModal={handleAddModal}
        textInput={jobTitle}
        handleInput={(text) => setJobTitle(text)}
        title="Add job title"
        placeholder="Job title..."
        callback={addJobTitle}
      />
      <Modal
        visible={visibleEditModal}
        handleModal={handleEditModal}
        textInput={editableJobTitle.title}
        handleInput={(text) =>
          setEditableJobTitle({
            ...editableJobTitle,
            title: text,
          })
        }
        title="Edit job title"
        callback={editJobTitle}
      />
      <SearchBar
        placeholder="Search..."
        text={jobTitleQuery}
        setText={setJobTitleQuery}
      />
      <ListItem
        data={jobTitleQuery ? jobTitleQueryList : jobTitles}
        field="title"
        editCallback={handleEditModal}
        deleteCallback={deleteJobTitle}
        noItemFoundTitle="No job title found"
      />
      <PrimaryButton onPress={handleAddModal}>
        <PrimaryTextButton>Add job title</PrimaryTextButton>
      </PrimaryButton>
    </>
  );
};

export default JobTitle;
