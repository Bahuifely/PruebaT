import React, { useEffect, useState } from 'react';
import {Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";



//Variables 
const TablaUsers = () => {
  const [users, setUsers] = useState([]);
// consumir la api
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Género</th>
            <th>Imail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TablaUsers;