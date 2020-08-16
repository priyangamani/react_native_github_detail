import React, { Fragment, useState } from 'react';
import {  View } from 'react-native';
import { List } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import get from 'lodash/get';
import Button from '../src/components/Button';
import styles from './styles';


const RepoDetailsComponent = ({ route }) => {
  const [showDetail, setShowDetail] = useState(false);
  const { item } = route.params;
  const getdetail = () => {
    setShowDetail(true);
  }

  return (
    <Fragment>
        { showDetail && <WebView
        source={{
          uri: get(item, 'clone_url', 'https://github.com/')
        }}
        
      />}
      
      {!showDetail&&
      <Fragment>
      <View style={styles.container}>
        <List.Item
          title={get(item, 'name', "--")}
          left={() => <List.Icon color="#000" icon="equal" />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={getdetail} >
          Go to Details
        </Button>
      </View>
      </Fragment>}
    
    </Fragment>

  );
};


export default RepoDetailsComponent;

