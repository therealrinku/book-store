import styles from "../styles/UserPage.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import LoadingView from "../components/LoadingView";
import GoBackButton from "../components/GoBackButton";
import UserContext from "../UserContext";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userEmail, isAdmin } = useContext(UserContext);

  useEffect(() => {
    if (isAdmin) {
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
    }
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
      ) : isAdmin ? (
        <div className={styles.usersPage}>
          <GoBackButton />
          <p style={{ textAlign: "center", marginBottom: "30px", fontSize: "25px" }}>Users List</p>
          {users.map((user) => {
            return (
              <section key={user.email}>
                <p>{user.email}</p>

                {userEmail !== user.email && user.email !== "adminuser@gmail.com" ? (
                  <button
                    style={user.isAdmin ? { color: "red" } : null}
                    onClick={() => toggleAdminStatus(user._id, user.isAdmin)}
                  >
                    {user.isAdmin ? "Remove Admin" : "Make Admin"}
                  </button>
                ) : null}

                {user.email === "adminuser@gmail.com" ? <p style={{ marginLeft: "5px", color: "red" }}>owner</p> : null}
              </section>
            );
          })}
        </div>
      ) : (
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "90vh",
            justifyContent: "center",
          }}
        >
          You don't have access to this page.
        </p>
      )}
    </>
  );
}
