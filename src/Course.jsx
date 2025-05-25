import React from 'react';
import "./App.css";
import { useNavigate } from 'react-router-dom';


const Course = () => {

const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/'); 
  };

  return (
    <div className="container" role="main">
    <header>
      <button className="btn" aria-label="Back to Dashboard" onClick={handleNavigate}>
        <i className="fas fa-arrow-left" aria-hidden="true"></i>
        Regresar al Dashboard
      </button>
      <button className="btn accessibility" aria-label="Accessibility">
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