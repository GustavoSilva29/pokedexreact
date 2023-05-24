import React from "react";

import Routes from "../src/routes";

function App() {
  //Remove console.log in production
  if (process.env.NODE_ENV !== "development") console.log = () => {};

  return <Routes />;
}

export default App;

/*Este código define o componente App, que é responsável por renderizar as rotas da aplicação. 
Dentro do componente, há uma verificação para remover a chamada de console.log em produção. 
Isso significa que, quando o ambiente de execução for diferente de desenvolvimento, 
a função console.log será substituída por uma função vazia, removendo assim as saídas de log no console. 
Em seguida, é retornado o componente Routes, que renderiza as rotas da aplicação. 
O componente App é exportado como o componente principal da aplicação.*/
