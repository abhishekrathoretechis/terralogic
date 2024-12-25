import React, {useEffect} from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsersThunk} from '../redux/slices/searchSlice';

const ResultsComponent = () => {
  const {users, loading, error, page, login} = useSelector(
    state => state.search,
  );
  const dispatch = useDispatch();

  const loadMore = () => {
    if (!loading) dispatch(fetchUsersThunk({login, page: page + 1}));
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Image source={{uri: item.avatar_url}} style={styles.avatar} />
            <Text>{item.login}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  error: {color: 'red', textAlign: 'center'},
  item: {flexDirection: 'row', alignItems: 'center', marginBottom: 16},
  avatar: {width: 40, height: 40, borderRadius: 20, marginRight: 16},
});

export default ResultsComponent;
