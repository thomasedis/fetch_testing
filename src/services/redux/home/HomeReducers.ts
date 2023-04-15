import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/**
 * ? Local Imports
 */
import { ISectionHome } from '@services/models';

export interface InitialState {
  loading: boolean;
  sections: ISectionHome | null;
}

const initialState: InitialState = {
  loading: false,
  sections: null,
};

const homeReducer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getSectionsRequest(state) {
      state.loading = true;
    },
    getSectionsFailure(state) {
      state.loading = false;
    },
    getSectionsSuccessed(state, action: PayloadAction<ISectionHome>) {
      state.loading = false;
      state.sections = action.payload;
    },
  },
});

export const { getSectionsRequest, getSectionsFailure, getSectionsSuccessed } =
  homeReducer.actions;

export default homeReducer.reducer;
