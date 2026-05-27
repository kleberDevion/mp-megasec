import { useState, useEffect, useRef } from "react";

export default function Login({ aoLogar }) {
  const [login, setNome] = useState('');
  const [password, setSenha] = useState('');

  const handleLogin = async (e) => {
    if (e) e.preventDefault();

    try {
      const response = await fetch("http://localhost:9090/pages/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: login,
          senha: password,
        })
      });

      if (response.ok) {
        const dados = await response.json();
        console.log(dados.token);

        const user = {
           id: dados.id,
           nome: dados.user_name,
           email: dados.user_mail,
           token: dados.token
        }

        localStorage.setItem("user", JSON.stringify(user));

        aoLogar(user);
      } else {
        console.log("Verifique suas credencias");
      }
    } catch (error) {
      console.log("Erro de conexao ou erro interno no servidor", error);
    }
  };

  return (
    <div style={{
       width: '100%',
       height: '100%',
       background: '#111425',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
    }}>
       <div style={{
         width: '500px',
         height: '420px',
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         border: '1px solid red',
         transform: 'translateY(90px)'
       }}>
           <form style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '30px'
           }}>
              <input type="text" id="login" placeholder="Login"
              value={login}
              onChange={(e) => setNome(e.target.value)} autoComplete='current-login'
              />

              <input type="text" id="password" placeholder="Senha"
              value={password}
              onChange={(e) => setSenha(e.target.value)} autoComplete='current-password'
              />

              <button type="submit" id="btn-login" form='form' onClick={(e) => handleLogin(e)}>
                 Entrar
              </button>
           </form>
       </div>
    </div>
  );
}
