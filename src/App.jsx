import React, { useState, Suspense, lazy } from 'react';
import TablaUsers from './Components.jsx/TablaUsers';
import ExportPDFButton from './Components.jsx/pdf';


const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className="p-6">
      <h1>Tabla Estudiantes</h1>
      <ExportPDFButton users={users}/>
      <TablaUsers onDataReady={setUsers}/>
    </div>
  );
}

export default App;