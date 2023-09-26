import { useState } from 'react';

type FormProp = {
  handleCancelForm: () => void
};

function Form({ handleCancelForm }: FormProp) {
  const [formData, setFormData] = useState({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((formState) => (
      {
        ...formState,
        [event.target.name]: event.target.value,
      }
    ));
  }

  // Ajudinha do google nessa parte do código

  function passwordConditions(condition: string, validate: boolean) {
    return (
      <p className={ validate ? 'valid-password-check' : 'invalid-password-check' }>
        {condition}
      </p>
    );
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
      <label htmlFor="nameService">Nome do serviço</label>
      <input
        type="text"
        id="nameService"
        value={ formData.serviceName }
        name="serviceName"
        onChange={ handleChange }
      />

      <label htmlFor="login">login</label>
      <input
        type="text"
        id="login"
        value={ formData.login }
        name="login"
        onChange={ handleChange }
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        value={ formData.password }
        onChange={ handleChange }
      />

      <label htmlFor="url">URL</label>
      <input
        type="text"
        id="url"
      />

      <button disabled={ !formIsValid }>Cadastrar</button>
      <button onClick={ () => handleCancelForm() }>Cancelar</button>

      { passwordConditions(
        'Possuir 8 ou mais caracteres',
        formData.password.length >= 8,
      )}
      { passwordConditions(
        'Possuir até 16 caracteres',
        formData.password.length <= 16,
      )}
      { passwordConditions(
        'Possuir letras e números',
        /[a-zA-Z-]/.test(formData.password) && /\d/.test(formData.password),
      )}
      { passwordConditions(
        'Possuir algum caractere especial',
        /\W/.test(formData.password),
      )}
    </form>
  );
}

export default Form;
