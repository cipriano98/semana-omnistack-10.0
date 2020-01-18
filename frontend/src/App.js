import React, { useState } from 'react';

import './global.css';
import './app.css';
import './sidebar.css';

import Header from './Header';



function App() {
  return (
    <>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
            <form >

                <div className="input-block">
                  <label htmlFor="github_username">Usuário do github</label>
                  <input name="github_username" type="text" id="github_username" required/>
                </div>

                <div className="input-block">
                  <label htmlFor="techs">Tecnologias</label>
                  <input name="techs" type="text" id="techs" required/>
                </div>

               <div className="input-group">

                <div className="input-bolck">
                    <label htmlFor="longitude">Longitude</label>
                    <input name="longitude" type="text" id="longitude" required/>
                </div>

                  <div className="input-bolck">
                    <label htmlFor="latitude">Latitude</label>
                    <input name="latitude" type="text" id="latitude" required/>
                  </div>

               </div>

               <button type="submit">Salvar</button>

               <ul>
                 <li className="personal-item">
                    <header>
                      <img src="teste" alt="Diego Fernandes"/>
                      <div className="user-info">  {/* 1h */}

                      </div>
                    </header>
                 </li>
               </ul>



            </form>
        </aside>
        <main>

        </main>
      </div>
    </>
  );
}

export default App;
