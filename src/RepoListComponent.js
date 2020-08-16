import React, { Fragment, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { List } from 'react-native-paper';
import { FlatList, View,ActivityIndicator,TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from './action'
import Button from '../src/components/Button';
import styles from './styles';




const SearchScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [loader, setLoader] = useState(true);

  const data = useSelector(state => state.appData.data)
  const onSubmitHandler = () => {
    setLoader(false);
    dispatch(fetchData(value));
  }

  const renderFooter = () => {
     if (loader) return null;
     return (
       <ActivityIndicator
         style={{ color: '#000' }}
       />
     );
   };
  return (
    <Fragment>
      <View style={styles.container}>
        <Searchbar
          placeholder="Type..."
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
        />
        <Button mode="contained" onPress={onSubmitHandler}>
          search
      </Button>

      {renderFooter()}
      </View>

      {data&&
        <FlatList
          keyExtractor={(item, index) => item.id.toString()}
          refreshing={onSubmitHandler}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() =>navigation.navigate('RepoDetailsComponent',{
              item}
            )}>
            <List.Item
              title={item.full_name}
              left={() => <List.Icon color="#000" icon="equal" />}
            /></TouchableOpacity>)}
        />
     }


    </Fragment>
  );
};


export default SearchScreen;

