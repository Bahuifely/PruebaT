import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ExportPDFButton = ({ users }) => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Lista de Usuarios', 14, 15);
    
    doc.autoTable({
      startY: 20,
      head: [['ID', 'Nombre', 'Apellido', 'Edad', 'Género', 'Email']],
      body: users.map(user => [
        user.id,
        user.firstName,
        user.maidenName,
        user.age,
        user.gender,
        user.email,
      ]),
    });

    doc.save('usuarios.pdf');
  };

  return (
    <button
      onClick={exportToPDF}
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Exportar a PDF
    </button>
  );
};

export default ExportPDFButton;