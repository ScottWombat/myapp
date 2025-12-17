import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
//import { userAdded, userUpdated, userDeleted, fetchUsers } from '../../store/usersSlice';
import { userDeleted, fetchUsers } from '../../store/usersSlice'
const UserList = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.entities);
  useEffect(() => {
    console.log('Component mounted!');
    dispatch(fetchUsers())

    console.log(users)
  }, []);
  const handleDelete = (id: number) => {
    dispatch(userDeleted({ id }));
  };
  return (
    <table style={{ float: 'left', width: '100%' }}>
      <thead>
        <tr>
          <td style={{ float: 'left', width: '25%' }}>ID</td>
          <td style={{ float: 'left', width: '25%' }}>Name</td>
          <td style={{ float: 'left', width: '25%' }}>Email</td>
          <td style={{ float: 'left', width: '25%' }}>Actions</td>
        </tr>
      </thead>
      <tbody>
        {users.length &&
          users.map(({ id, name, email }, i) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default UserList;
