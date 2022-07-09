import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllCharacters = createAsyncThunk(
  'character/getAllCharacters',
  async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
  }
);

export const getCharacter = createAsyncThunk(
  'character/getCharacter',
  async (id) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();

    return data;
  }
);

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    list: [],
    selected: null,
    status: '',
  },
  extraReducers: {
    [getAllCharacters.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllCharacters.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.list = payload;
    },
    [getAllCharacters.rejected]: (state) => {
      state.status = 'failed';
    },
    [getCharacter.pending]: (state) => {
      state.status = 'loading';
    },
    [getCharacter.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.selected = payload;
    },
    [getCharacter.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default characterSlice.reducer;
