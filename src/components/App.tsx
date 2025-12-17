import { lazy } from 'react'
import { Route, Routes } from 'react-router'

import { InitialData } from '@shared'

import { ROUTES } from '../constants'
import { ProfileProvider } from '../context/profile'
import { Provider } from "react-redux";
import { store } from '../store';
import Home from './Home'
import { Layout } from './Layout'

const Posts = lazy(() => import('./Posts'))
const Todos = lazy(() => import('./Todos'))
const Albums = lazy(() => import('./Albums'))
const Counter = lazy(() => import('./Counter'))
const UserList = lazy(() => import('./users/UserList'))
type AppProps = {
  initialData?: InitialData
}

export function App({ initialData }: AppProps) {
  return (
    <Provider store={store}>
      <ProfileProvider defaultProfile={initialData?.profile}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.posts} element={<Posts />} />
            <Route path={ROUTES.albums} element={<Albums />} />
            <Route path={ROUTES.todos} element={<Todos />} />
            <Route path={ROUTES.counter} element={<Counter />} />
            <Route path={ROUTES.userlist} element={<UserList />} />
          </Route>
        </Routes>
      </ProfileProvider>
    </Provider>
  )
}
