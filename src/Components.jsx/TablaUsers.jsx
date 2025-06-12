import React, { useEffect, useState } from 'react';

const TablaUsers = ({onDataReady = () => {}}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
      setUsers(data.users);
      onDataReady(data.users);})
      .catch(error => console.error('Error al obtener los datos:', error));
  }, [onDataReady]);

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 shadow-sm rounded-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border border-pink-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Apellido</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Edad</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Género</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.maidenName}</td>
                <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                <td className="border border-gray-300 px-4 py-2">{user.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaUsers;