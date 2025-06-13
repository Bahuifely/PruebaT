import React, { useState, Suspense } from 'react';
import TablaUsers from './Components.jsx/TablaUsers';
import ExportPDFButton from './Components.jsx/pdf';

const LazyComponent = React.lazy(() => import('./Components.jsx/LazyLoad'))

const App = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className="p-6">
      <h1>Tabla Estudiantes</h1>
      <Suspense fallback={<div>Cargando...</div>}>
      <ExportPDFButton users={users}/>
      <TablaUsers onDataReady={setUsers}/>
      <LazyComponent/>
      </Suspense>
      
    </div>
  );
}

export default App;