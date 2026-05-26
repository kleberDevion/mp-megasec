import { useState, useEffect, useRef } from "react";

export default function Login({ aologar }) {
  const [login, setNome] = useState('');
  const [password, setSenha] = useState('');

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    try {
      const response = await fetch("http://0.0.0.0:9090/pages/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login: login,
          password: password,
        })
      });

      if (response.ok) {
        const dados = await response.json();
        console.log(dados);

        localStorage.setItem("token", dados.token);
        aoLogar(dados.token);
      } else {
        console.log("Verifique suas credencias");
      }
    } catch (error) {
      console.log("Erro de conexao ou erro interno no servidor", error);
      alert("Servidor offline");
    }
  };

  return (
    <div>
       <h5>Ola mundo</h5>
    </div>
  );
}
