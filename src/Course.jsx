import React from 'react';
import { useState, useRef } from "react";
import "./App.css";
import { useNavigate } from 'react-router-dom';
import useSpeechToText from "./hooks/useSpeechToText";


const Course = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home'); 
  };

  const [textInput, setTextInput] = useState("");
  const {isListening, finalTranscript, startListening, stopListening } = useSpeechToText({continuous:true});
  const fileInputRef = useRef(null);
  const sections = useRef({});

  const startStopListening = () => {
    isListening ? stopListening() : startListening();
  }

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text); 
    utterance.lang = "es-ES"; 
    window.speechSynthesis.speak(utterance); 
  };

  const handleCommand = (command) => {
    command = command.toLowerCase();
    console.log("Comando procesado:", command);

    if (command.includes("subir")) {
       fileInputRef.current?.click();
    } else if (command.includes("leer")) {
      speak(sections.current.section1.innerText + sections.current.section2.innerText + sections.current.section3.innerText); 
    } else if (command.includes("curso 1")) {
      speak("Yendo a curso uno:" + sections.current.section1.innerText);
      window.location.href = "/course";
    } else if (command.includes("inicio")) {
       speak("Volviendo a la pantalla principal");
       window.location.href = "/home";
    }
  };

  if (isListening && finalTranscript.length > 0) {
    handleCommand(finalTranscript);
  }


  return (
    <div className="container" role="main">
    <header>
      <button className="btn" aria-label="Back to Dashboard" onClick={handleNavigate}>
        <i className="fas fa-arrow-left" aria-hidden="true"></i>
        Regresar al Dashboard
      </button>
      <button className="btn accessibility" aria-label="Accessibility" onClick={() => {startStopListening()}}>
        <i className="fas fa-volume-up" aria-hidden="true"></i>
        Accesibilidad
      </button>
    </header>

    <section aria-labelledby="course-title">
      <h1 id="course-title" className="title">Introducción a desarrollo web</h1>
      <p className="subtitle">
        Aprende lo básico de desarrollo web usando HTML, CSS, y JavaScript
      </p>
      <div className="info-row">
        <div className="info-item">
          <i className="far fa-clock" aria-hidden="true"></i>
          <span>Duración: 8 semanas</span>
        </div>
        <span className="badge">Principante</span>
      </div>
      <div className="progress-label" aria-label="Overall progress">
        <span>Progreso</span>
        <span>75%</span>
      </div>
      <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
        <div className="progress-bar-fill"></div>
      </div>
    </section>

    <section aria-labelledby="modules-title"  style={{ marginTop: '32px' }}>
      <h2 id="modules-title" className="section-title">Course Modules</h2>
      <div className="modules-list">

        <article className="module" aria-label="Getting Started with Web Development module">
          <div className="module-header">
            <div className="module-icon" aria-hidden="true">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="module-title">Comenzando en el desarrollo web</h3>
          </div>
          <p className="module-desc">Introducción al desarrollo web: conceptos y herramientas</p>
          <div className="module-footer">
            <div className="time">
              <div>100%</div>
              <div className="duration">45 min</div>
            </div>
            <button type="button">Revisar</button>
          </div>
          <div className="module-progress-container">
            <div className="module-progress-fill"></div>
          </div>
        </article>


        <article className="module" aria-label="HTML Fundamentals module">
          <div className="module-header">
            <div className="module-icon" aria-hidden="true">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="module-title">Fundamentos de HTML</h3>
          </div>
          <p className="module-desc">Aprende la estructura y semántica de HTML</p>
          <div className="module-footer">
            <div className="time">
              <div>100%</div>
              <div className="duration">2 horas</div>
            </div>
            <button type="button">Revisar</button>
          </div>
          <div className="module-progress-container">
            <div className="module-progress-fill"></div>
          </div>
        </article>
        <article className="module" aria-label="CSS Styling and Layout module">
          <div className="module-header">
            <div className="module-icon" aria-hidden="true">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="module-title">Estilos y layout con CSS</h3>
          </div>
          <p className="module-desc">Aprende CSS para layouts estéticos y responsive</p>
          <div className="module-footer">
            <div className="time">
              <div>100%</div>
              <div className="duration">3 horas</div>
            </div>
            <button type="button">Revisar</button>
          </div>
          <div className="module-progress-container">
            <div className="module-progress-fill"></div>
          </div>
        </article>

        <article className="module" aria-label="JavaScript Basics module">
          <div className="module-header">
            <div className="module-icon number" aria-hidden="true">4</div>
            <h3 className="module-title">JavaScript básico</h3>
          </div>
          <p className="module-desc">Introducción a programación con JavaScript</p>
          <div className="module-footer">
            <div className="time">
              <div>50%</div>
              <div className="duration">2.5 horas</div>
            </div>
            <button type="button">Continuar</button>
          </div>
          <div className="module-progress-container">
            <div className="module-progress-fill half"></div>
          </div>
        </article>
        <article className="module" aria-label="Advanced JavaScript Concepts module">
          <div className="module-header">
            <div className="module-icon number" aria-hidden="true">5</div>
            <h3 className="module-title">Conceptos avanzados de JavaScript</h3>
          </div>
          <p className="module-desc">Explora más profundo en JavaScript con módulos avanzados</p>
          <div className="module-footer">
            <div className="time">
              <div>0%</div>
              <div className="duration">3 horas</div>
            </div>
            <button type="button">Continuar</button>
          </div>
          <div className="module-progress-container">
            <div className="module-progress-fill zero"></div>
          </div>
        </article>

        <article className="module locked" aria-label="Building Your First Website module">
          <div className="module-header">
            <div className="module-icon locked" aria-hidden="true">
              <i className="fas fa-lock"></i>
            </div>
            <h3 className="module-title">Contruyendo tu primera Website</h3>
          </div>
          <p className="module-desc">Aplica todos tus conocimientos para crear una website completa</p>
          <div className="module-footer">
            <div className="time">
              <div>0%</div>
              <div className="duration">4 horas</div>
            </div>
          </div>
          <div className="module-progress-container">
            <div className="module-progress-fill zero"></div>
          </div>
        </article>
      </div>
    </section>
  </div>
  );
}
export default Course;