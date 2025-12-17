import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import usersSlice from './usersSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer:{
        counter : counterSlice,
        users: usersSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()