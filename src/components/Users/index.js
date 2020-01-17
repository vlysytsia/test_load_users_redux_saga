import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./users.module.css";
const Users = ({ users, error, loading, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div>
          {users.map(({ id, first_name, last_name, avatar }) => (
            <div key={id} className={styles.listItem}>
              <img className={styles.userAvatar} src={avatar} alt="User avatar" />
              {first_name} {last_name}
            </div>
          ))}
        </div>
      )}

      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

Users.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  error: PropTypes.string,
  loading: PropTypes.bool,
  fetchUsers: PropTypes.func.isRequired
};

export default Users;
