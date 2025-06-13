import React, { useEffect, useState } from 'react';

const TablaUsers = ({onDataReady = () => {}}) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState (1);
  const [limit] = useState (10);
  const [total, setTotal] = useState (0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${(page - 1) * limit}`
        );
        const data = await response.json();
        setUsers(data.users);
        setTotal(data.total); 
        onDataReady(data.users);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  fetchUsers();
  }, [page, limit, onDataReady]);


  const totalPages = Math.ceil(total / limit);
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
              <tr key={users.id} className="hover:bg-gray-50">
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
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Anterior</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Siguiente</button>
      </div>
    </div>
  );
};

export default TablaUsers;