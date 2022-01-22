import React, { useState, useEffect } from "react";

import ListUser from "../components/ListUser";
import userApi from "../api/userApi";

const User = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userListResponse = await userApi.getAllUser();
        setUserList(userListResponse);
      } catch (error) {
        alert(`You don't have permission to access!`);
      }
    };

    fetchUser();
  }, []);

  return <ListUser data={userList} />;
};

export default User;
