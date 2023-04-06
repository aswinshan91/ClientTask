
import React, { createContext, useState, useEffect } from "react";
import https from '../https';
import { Alert } from 'react-native';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  //   const fetchDashBoardDetails = () => {
  //     axios.get("https://jsonplaceholder.typicode.com/users/1")
  //         .then(response => {
  //             setTodos(response.data);
  //         })
  //         .catch(error => {
  //             console.log(error);
  //         });
  // }

  const fetchDashboard = async () => {
    const userApiUrl = https.get(`users/1`)
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    const userListApiUrl = https.get(`users/1/posts`)
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    Promise.all([userApiUrl, userListApiUrl]).then(function (response) {
      return response
    }).catch(function (err) {
      console.log(err);
    })
  };

  const updateContentDetail = async(detail) => {
    const article = {
      body: detail.body,
      userId: detail.userId,
      id: detail.id,
      title: detail.title
    };
    https.put(`posts/${detail.userId}`, article)
      .then(response => {
        Alert.alert('Content Updated Successfully. Go back to main menu and revisit to check the updated content.');
       })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <APIContext.Provider
      value={{
        userDetails,
        userList,
        updateContentDetail,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIContext;
