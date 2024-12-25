import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchUsers} from '../../services/api';

export const fetchUsersThunk = createAsyncThunk(
  'search/fetchUsers',
  async ({login, page}) => {
    const data = await fetchUsers(login, page);
    return data;
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    users: [],
    loading: false,
    error: null,
    page: 1,
    login: '',
  },
  reducers: {
    resetSearch: state => {
      state.users = [];
      state.page = 1;
      state.login = '';
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsersThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...state.users, ...action.payload.items];
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {resetSearch, setLogin} = searchSlice.actions;
export default searchSlice.reducer;
