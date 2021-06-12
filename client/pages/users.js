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
      .then((res) => {
        window.location.reload();
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
          <p style={{ textAlign: "center" }}>Users List</p>
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
