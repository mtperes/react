// Octokit.js
// https://github.com/octokit/core.js#readme

import { Octokit } from "@octokit/core";

import React, { useEffect, useState } from "react";


const ListUsers = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request('GET /users', {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        setUsers(response.data.map(user => user.login));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={styles.list}>
      <h2>List Users</h2>
      {users.map(user => (<li style={styles.user} key={user}>{user}</li>))}
     
    </div>
  );
};
const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
    justifyContent: 'center',
    marginTop: '20px',
    with: '50%',
  },
  user: {
    textAlign: 'center',  
    backgroundColor: '#f0f0f0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    overflowX: 'auto',
    maxWidth: '300px',
    margin: '5px 0', 

  },
};  
export default ListUsers;