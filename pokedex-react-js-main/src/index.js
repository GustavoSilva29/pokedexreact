import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

/*a função ReactDOM.render é chamada para renderizar o componente App dentro do elemento com o ID "root" do documento HTML. 
O React.StrictMode é usado para envolver o componente App e ativar verificações adicionais de segurança e desempenho no modo de desenvolvimento.

Por fim, a função reportWebVitals é chamada para registrar as métricas de desempenho da aplicação. 
Isso permite analisar e monitorar o desempenho da aplicação com o auxílio da biblioteca "web-vitals".*/
