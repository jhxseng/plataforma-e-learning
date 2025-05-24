import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";


import "./App.css";

function App() {

  return (
    <>


        <header>
          <div>
            <h1>Plataforma E-learning</h1>
            <p>Una experiencia de aprendizaje personalizada</p>
          </div>
          <div>
            <i class="far fa-user user-icon" aria-hidden="true"></i>
          </div>
        </header>

        <section
          class="upload-section"
          role="region"
          aria-label="Área para subir archivos"
        >
          <i class="fas fa-upload" aria-hidden="true"></i>
          <p>Arrastra o sube tus archivos aquí</p>
          <p>
            Soporta archivos <span>PDF, DOCX, PPTX</span>
          </p>
        </section>

        <section class="progress-section" aria-label="Tu progreso">
          <h2>Tu progreso</h2>
          <div class="progress-cards">
            <article
              class="card"
              role="article"
              aria-label="Curso Introducción a finanzas, progreso 5 por ciento, actualizado hace 2 días"
            >
              <h3>Introducción a finanzas</h3>
              <p class="date">Hace 2 días</p>
              <div class="progress-bar-container">
                <input
                  type="range"
                  class="progress-bar"
                  min="0"
                  max="100"
                  value="5"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="5"
                  aria-label="Progreso del curso"
                  disabled
                />
                <span class="progress-percent">5%</span>
              </div>
              <Link to="/course" className="continue-link">
                Seguir aprendiendo
              </Link>
            </article>

            <article
              class="card"
              role="article"
              aria-label="Curso Introducción a finanzas, progreso 5 por ciento, actualizado hace 2 días"
            >
              <h3>Introducción a finanzas</h3>
              <p class="date">Hace 2 días</p>
              <div class="progress-bar-container">
                <input
                  type="range"
                  class="progress-bar"
                  min="0"
                  max="100"
                  value="5"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="5"
                  aria-label="Progreso del curso"
                  disabled
                />
                <span class="progress-percent">5%</span>
              </div>
              <Link to="/course" className="continue-link">
                Seguir aprendiendo
              </Link>
            </article>

            <article
              class="card"
              role="article"
              aria-label="Curso Introducción a finanzas, progreso 5 por ciento, actualizado hace 2 días"
            >
              <h3>Introducción a finanzas</h3>
              <p class="date">Hace 2 días</p>
              <div class="progress-bar-container">
                <input
                  type="range"
                  class="progress-bar"
                  min="0"
                  max="100"
                  value="5"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="5"
                  aria-label="Progreso del curso"
                  disabled
                />
                <span class="progress-percent">5%</span>
              </div>
               <Link to="/course" className="continue-link">
                Seguir aprendiendo
              </Link>
            </article>
          </div>
        </section>
    </>
  );
}

export default App;
