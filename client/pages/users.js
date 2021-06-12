import styles from "../styles/UserPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import LoadingView from "../components/LoadingView";
import GoBackButton from "../components/GoBackButton";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl + "/auth/getUsers")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const toggleAdminStatus = (id, isAdmin) => {
    axios
      .post(apiUrl + `/auth/toggleAdminStatus/${id}`, { isAdmin: !isAdmin })
      .then(() => {
        //updating locally
        const usersCopy = [...users];
        const updatedUserIndex = usersCopy.findIndex((user) => user._id === id);
        usersCopy[updatedUserIndex].isAdmin = !isAdmin;
        setUsers(usersCopy);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      {loading ? (
        <LoadingView />
      ) : (
        <div className={styles.usersPage}>
          <GoBackButton />
          <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "25px" }}>Users List</p>
          {users.map((user) => {
            return (
              <section key={user.email}>
                <p>{user.email}</p>
                <button
                  style={user.isAdmin ? { color: "red" } : null}
                  onClick={() => toggleAdminStatus(user._id, user.isAdmin)}
                >
                  {user.isAdmin ? "Remove Admin" : "Make Admin"}
                </button>
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
