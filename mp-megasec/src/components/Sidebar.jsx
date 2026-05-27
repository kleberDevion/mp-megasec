import React, { useState, useEffect, useRef } from "react";

export default function Sidebar({ mudarDePagina, aoSair }) {
  const [usuario, setUsuario] = useState(null);
  const [aberto, setAberto] = useState(true);

  return (
    <nav id="nav-bar" style={{ display: aberto ? "flex" : "none" }}>
      <div id="header-nav">
        <picture id="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="20"
            width="20"
          >
            <path
              fill="#179e17"
              fillRule="evenodd"
              d="M9.002 5.913 0.75 1.786v16.178l8.5 4.25v-6.77l14 6.75V6.037l-8.017 -4.009 -4.266 6.636 -1.965 -2.751ZM2.25 17.036V4.215l5.5 2.75v12.823l-5.5 -2.75Zm7 -3.257 4.696 2.264 -3.568 -5.624L9.25 8.84v4.939Zm2.64 -3.776 4.076 6.424 5.49 -9.61 -5.69 -2.845 -3.876 6.03Zm9.86 -0.678 -4.694 8.218 4.694 2.263V9.326Z"
              clipRule="evenodd"
              strokeWidth="1"
            />
          </svg>
        </picture>
        <h4 style={{ display: "flex", transform: "translateX(20px)" }}>
          MegaVoz
        </h4>
        <div id="voltar" onClick={() => setAberto(false)}>
          <i className="ri-contract-left-line"></i>
        </div>
      </div>

      <nav id="content">
        <div className="menu-container">
          <details open>
            <summary onClick={() => mudarDePagina("Home")}>
              <i className="ri-home-9-line"></i>
              <h5
                style={{
                  display: "flex",
                  transform: "translateX(-164PX)",
                }}
              >
                Inicio
              </h5>
            </summary>
          </details>

          <details>
            <summary
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <i className="ri-phone-line"></i>

              <h5
                style={{
                  display: "flex",
                  transform: "translateX(-50px)",
                }}
              >
                Telefonia fixa
              </h5>

              <i className="ri-arrow-down-s-line"></i>
            </summary>

            <div
              className="subitem"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "18px",
                alignItems: "center",
                paddingLeft: "30px",
              }}
              onClick={() => mudarDePagina("Portabilidade")}
            >
              <i className="ri-survey-line"></i>

              <h5
                style={{
                  display: "flex",
                  transform: "translateX(-92PX)",
                }}
              >
                Portabilidades
              </h5>
            </div>

            <div
              className="subitem"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "18px",
                alignItems: "center",
                paddingLeft: "30px",
                lex: 1,
                overflowWrap: "break-word",
                wordBreak: "break-word",
              }}
            >
              <i className="ri-file-check-line"></i>

              <h5
                style={{
                  display: "flex",
                  transform: "translateX(-23px)",
                }}
                onClick={() => mudarDePagina("PortabilidadesConcluidas")}
              >
                Portabilidades concluidas
              </h5>
            </div>

            <div
              className="subitem"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "18px",
                alignItems: "center",
                paddingLeft: "30px",
              }}
            >
              <i className="ri-mail-check-line"></i>

              <h5
                style={{
                  display: "flex",
                  transform: "translateX(-10PX)",
                }}
              >
                Port out / saintes concluidas
              </h5>
            </div>
            <div
              className="subitem"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "18px",
                alignItems: "center",
                paddingLeft: "30px",
                borderBottom: "1px solid #ccc",
              }}
              onClick={() => mudarDePagina("CadastroPortabilidade")}
            >
              <i className="ri-file-add-line"></i>

              <h5
                style={{
                  display: "flex",
                  transform: "translateX(-40px)",
                }}
              >
                Cadrastro de nova Port
              </h5>
            </div>
          </details>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: "0",
          left: "0",
          border: "none",
          width: "252px",
          height: "50px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            border: "none",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            fontSize: "14px",
          }}
        >
          <button
            type="button"
            style={{
              width: "30px",
              padding: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: "5px",
              border: "1px solid #ccc",
              borderRadius: "",
            }}
            onClick={aoSair}
          >
            <i className="ri-logout-box-line"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
