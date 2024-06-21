import React from 'react';
import { useState } from 'react';
import { apartment_backend } from 'declarations/apartment_backend';
import './components/header';
import Header from './components/header';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    apartment_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <div>
      <Header />
      
      <div class="card">
            <img src="assets/img/card.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card with an image on top</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card with an image on bottom</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <img src="assets/img/card.jpg" class="card-img-bottom" alt="..." />
          </div>
    </div>
  );
}

export default App;
