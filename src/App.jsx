import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import useSpeechToText from "./hooks/useSpeechToText";


import "./App.css";

const App = () => {

  const [textInput, setTextInput] = useState("");
  const {isListening, transcript, finalTranscript, startListening, stopListening } = useSpeechToText({continuous:true});
  const fileInputRef = useRef(null);
  const sections = useRef({});
  const lastCommandRef = useRef("");

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

    if (command.includes("subir archivo")) {
       fileInputRef.current?.click();
    } else if (command.includes("leer cursos")) {
      speak(sections.current.section1.innerText + sections.current.section2.innerText + sections.current.section3.innerText); 
    } else if (command.includes("curso 1")) {
      speak("Yendo a curso uno:" + sections.current.section1.innerText);
      window.location.href = "/course";
    } else if (command.includes("inicio")) {
       window.location.href = "/home";
    }
  };

   useEffect(() => {
    if (finalTranscript && finalTranscript !== lastCommandRef.current) {
      handleCommand(finalTranscript);
      lastCommandRef.current = finalTranscript; 
    }
  }, [finalTranscript]);

  

  return (

    <>
        <button 
        onClick={() => {startStopListening()}}
          style={
            {borderStyle: 'solid', 
             borderColor: 'black', 
             marginBottom: '10px', 
             fontSize: '14px', 
             cursor: 'pointer', 
             backgroundColor: isListening ? 'red' : "#61dafbaa", 
             color:'black', 
             transition: 'background-color 0.3s ease'
             }}>{isListening ? 'Detener' : 'Presiona para hablar'}</button>
        <header>
          <div>
            <h1>Plataforma E-learning - DiversiClass</h1>
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
          <input type ="file" id="file-upload" aria-label="Subir archivo" ref={fileInputRef}/>
        </section>

        <section class="progress-section" aria-label="Tu progreso">
          <h2>Tu progreso</h2>
          <div class="progress-cards">
            <article
              class="card"
              role="article"
              aria-label="Curso Introducción a finanzas, progreso 5 por ciento, actualizado hace 2 días"
            >
              <h3 ref={(el) => (sections.current.section1 = el)}>Introducción a desarrollo web</h3>
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
                  aria-valuenow="100"
                  aria-label="Progreso del curso"
                  disabled
                />
                <span class="progress-percent">100%</span>
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
              <h3 ref={(el) => (sections.current.section2 = el)}>Introducción a finanzas</h3>
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
              <h3 ref={(el) => (sections.current.section3 = el)}>Introducción a diseño UX</h3>
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
