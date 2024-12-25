import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button, Card, Title} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {
  fetchUsersThunk,
  setLogin,
  resetSearch,
} from '../redux/slices/searchSlice';

const SearchComponent = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(resetSearch());
    dispatch(setLogin(input));
    dispatch(fetchUsersThunk({login: input, page: 1}));
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>GitHub User Search</Title>
          <TextInput
            mode="outlined"
            label="GitHub Login"
            placeholder="Enter GitHub login"
            value={input}
            onChangeText={setInput}
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>
            Search
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  card: {
    elevation: 4,
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#3b3b3b',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 8,
  },
});

export default SearchComponent;
