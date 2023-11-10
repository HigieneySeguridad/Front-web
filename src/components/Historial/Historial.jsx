import React from 'react'
import "./historial.css"

export const Historial = () => {
  return (
    <div className='container-historial'>
    <div className="cards-historial">
      <label id="summary">
        <input type="checkbox" className='input' />
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
        <input type="checkbox" className='input'/>
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
        <input type="checkbox"  className='input'/>
        <article>
          <div className="front">
            <header>
              <h3>Features</h3>
              <span Name="material-symbols-outlined"> more_vert </span>
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
