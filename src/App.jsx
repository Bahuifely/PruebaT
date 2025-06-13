import React, { useState, useEffect } from 'react';
import TablaUsers from './Components.jsx/TablaUsers';
import ExportPDFButton from './Components.jsx/pdf';

const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className="p-6">
      <h1>Tabla Estudiantes</h1>

      <TablaUsers onDataReady={setUsers}/>
      <ExportPDFButton users={users}/>
      
    </div>
  );
}

export default App;