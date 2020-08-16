  
import axios from "axios";
import { Alert } from 'react-native';

//getGithubListAPI
export const getGithubListAPI = (params) => 
axios.get(`https://api.github.com/users/${params}/repos`, {
  headers: {
    'Accept': 'application/json'
  }
}).then(response => {
   return response.data
})
  .catch(err => {
    Alert.alert(err);
    throw err;
  });