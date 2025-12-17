import { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../store';
//import { userAdded, userUpdated, userDeleted, fetchUsers } from '../../store/usersSlice';
import { userAdded } from '../../store/usersSlice'

export const AddUser = () => {
  const dispatch = useAppDispatch();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e: any) => setName(e.target.value);
  const handleEmail = (e: any) => setEmail(e.target.value);

  const usersAmount = useAppSelector(state => state.users.entities.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          name,
          email
        })
      );

      setError(null);
      //history.push("/");
    } else {
      //setError("Fill in all fields");
    }

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
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
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
