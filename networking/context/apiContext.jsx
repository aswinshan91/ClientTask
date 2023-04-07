
import React, { createContext, useState, useEffect } from "react";
import https from '../https';
import { Alert } from 'react-native';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userBlogList, setUserBlogList] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboardList = () => {
    https.get(`users/1/posts`)
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
}

    const fetchBlogDetails = () => {
      https.get(`users/2/posts`)
        .then(response => {
          setUserBlogList(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  }

  const fetchDashboard = async () => {
    const userApiUrl = https.get(`users/1`)
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    // const userListApiUrl = https.get(`users/1/posts`)
    //   .then(response => {
    //     setUserList(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    Promise.all([userApiUrl]).then(function (response) {
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
        if (response) {
          fetchDashboardList();
        }
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
        userBlogList,
        updateContentDetail,
        fetchBlogDetails,
        fetchDashboardList,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIContext;
