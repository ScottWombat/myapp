import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
});

interface Geo{
    lat: string;
    lng: string;
}

interface Address{
    street: string;
    suit: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
interface Company{
    name: string;
    catchPharse: string;
    bs: string;
}

export interface User{
    id: number;
    name: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface UsersState {
    entities : User[];
    status: string;
    loading: boolean;
}
const initialState : UsersState = {
    entities: [],
    status: "idle",
    loading: false
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.entities.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.entities.find((user) => user.id === id);
      if (existingUser) {
        state.entities = state.entities.filter((user) => user.id !== id);
      }
    },
  },
  extraReducers: (builder) =>{
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled,(state, action) => {
        state.loading = false;
        state.status = 'fulfilled';
        state.entities = [...state.entities, ...action.payload];
      })
      .addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
            state.status = 'rejected';
      })
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
