// Users.jsx
import React from 'react';

const Users = ({ users }) => {
    const usersStartingWithB = users.filter(user => user[0] === 'B');

    return (
        <div>
            <h1>Users starting with letter B</h1>
            <ul>
                {usersStartingWithB.map((users, index => (
                    <li> {key={index}>{users}}</li>
                )))};
            </ul>
        </div>
    );
};

export default Users;