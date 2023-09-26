import { useState } from 'react';

type FormProps = {
  handleRenderForm: () => void,
};

function Form({ handleRenderForm }: FormProps) {
  const [formData, setFormData] = useState({
    serviceName: '',
    login: '',
    password: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((formState) => (
      {
        ...formState,
        [event.target.name]: event.target.value,
      }
    ));
  }

  const formIsValid = (formData.login.length > 0)
    && (formData.serviceName.length > 0)
    && (formData.password.length >= 8)
    && (formData.password.length <= 16)
    && (formData.password.length <= 16)
    && (formData.password.match(/[^a-zA-Z 0-9]+/g))
    && (formData.password.match(/[0-9]+/g))
    && (formData.password.match(/[a-z]+/g));

  return (
    <form>
      <label>
        Nome do serviço
        <input
          type="text"
          value={ formData.serviceName }
          name="serviceName"
          onChange={ handleChange }
        />
      </label>

      <label>
        Login
        <input
          type="text"
          value={ formData.login }
          name="login"
          onChange={ handleChange }
        />
      </label>

      <label>
        Senha
        <input
          type="password"
          name="password"
          value={ formData.password }
          onChange={ handleChange }
        />
      </label>

      <label>
        URL
        <input type="text" />
      </label>

      <button
        disabled={ !formIsValid }
      >
        Cadastrar
      </button>
      <button
        onClick={ handleRenderForm }
      >
        Cancelar
      </button>
    </form>
  );
}

export default Form;
