import React from 'react';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';




function App() {
  return (
    <div>
      <header><h1>Hello World!</h1></header>
      <Header/>
      <main>
        <section id="core-concepts"> 

        <h2>Core Concepts </h2>
        <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}/>

        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton>Components</TabButton>
          <TabButton></TabButton>
          <TabButton></TabButton>
            </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

