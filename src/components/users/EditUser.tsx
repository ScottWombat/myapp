import { useState } from "react";

import { useLocation } from "react-router-dom";
//import { useHistory, useLocation } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../store';
import { userUpdated, User } from '../../store/usersSlice'
//import { userUpdated } from '../../store/usersSlice'

export const EditUser = () => {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user: User | undefined = useAppSelector(state =>
    state.users.entities.find(user => user.id === userId)
  );

  const dispatch = useAppDispatch();

  const [name, setName] = useState<String>(user!.name);
  const [email, setEmail] = useState<String>(user!.email);
  const [error, setError] = useState(null);

  const handleName = (e: any) => setName(e.target.value);
  const handleEmail = (e: any) => setEmail(e.target.value);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email
        })
      );

      setError(null);
      //history.push("/");
    } else {
      //setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={String(name)}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={String(email)}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}

