import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface Person{
    name: string,
    age: number
}

interface InviteeState{
    people : Person[]
}

const initialState : InviteeState = {
    people: [],
}

export const inviteesSlice = createSlice({
  name: "invitees",
  initialState ,
  reducers: {
    // adding Person to state tree
    addInvitee: (state: InviteeState, action: PayloadAction<Person>) => {
        state.people.push(action.payload)
    }
  }
})