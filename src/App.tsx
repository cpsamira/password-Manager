import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {showForm ? (<Form handleCancelForm={ handleCancel } />
      ) : (<button onClick={ handleShowForm }>Cadastrar nova senha</button>)}
    </div>
  );
}

export default App;
