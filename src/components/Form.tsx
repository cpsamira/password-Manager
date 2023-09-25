type FormProp = {
  handleCancelForm: () => void
};

function Form({ handleCancelForm }: FormProp) {
  return (
    <form>
      <label htmlFor="nameService">Nome do serviço</label>
      <input type="text" id="nameService" />

      <label htmlFor="login">login</label>
      <input type="text" id="login" />

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />

      <label htmlFor="url">URL</label>
      <input type="text" id="url" />

      <button>Cadastrar</button>
      <button onClick={ () => handleCancelForm() }>Cancelar</button>
    </form>
  );
}

export default Form;
