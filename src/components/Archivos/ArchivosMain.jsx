import React from 'react'
import "./archivosMain.css"

export const ArchivosMain = () => {
  return (
    <div className='container-archivos'>
        <h1>Historial</h1>
         <div className="cards-archivos">
      <label id="summary">
        <input type="checkbox" className='check' />
        <article>
          <div className="front">
            <header>
              <h3>Summary</h3>
              <span className="material-symbols-outlined"> more_vert </span>
            </header>
            <var>21</var>
            <h3>Due Tasks</h3>
            <h4>Completed: 13</h4>
          </div>
          <div className="back">
            <header>
              <h3>Summary</h3>
              <span className="material-symbols-outlined"> close </span>
            </header>
            <p>More Information</p>
          </div>
        </article>
      </label>
      <label id="overdue">
        <input type="checkbox" className='check'/>
        <article>
          <div className="front">
            <header>
              <h3>Overdue</h3>
              <span className="material-symbols-outlined"> more_vert </span>
            </header>
            <var>17</var>
            <h3>Projects</h3>
            <h4>Yesterday: 9</h4>
          </div>
          <div className="back">
            <header>
              <h3>Overdue</h3>
              <span className="material-symbols-outlined"> close </span>
            </header>
            <p>More Information</p>
          </div>
        </article>
      </label>
      <label id="features">
        <input type="checkbox" className='check'/>
        <article>
          <div className="front">
            <header>
              <h3>Features</h3>
              <span className="material-symbols-outlined"> more_vert </span>
            </header>
            <var>38</var>
            <h3>Proposals</h3>
            <h4>Implemented: 6</h4>
          </div>
          <div className="back">
            <header>
              <h3>Features</h3>
              <span className="material-symbols-outlined"> close </span>
            </header>
            <p>More Information</p>
          </div>
        </article>
      </label>
    </div>
    </div>
  )
}

