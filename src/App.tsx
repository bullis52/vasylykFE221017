import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {randomizeArray} from "./utils";

function App() {
    const image1 = require('./assets/dogs.jpg');
    const image2 = require('./assets/cats.jpg');
    const image3 = require('./assets/chubaka.jpg');
    const image4 = require('./assets/dyno.jpg');
    const image5 = require('./assets/planets.jpg');
    const img = [image1,image2,image3,image4,image5]
    const [images, setImages] = useState<any>(img)

    const color = ['#DFFF00','#FF7F50','#FFBF00','#DE3163','#9FE2BF','#40E0D0','#6495ED','#CCCCFF','#CD5C5C','#FF33FC']

    const randomizeImages = () => {
        const newImg = randomizeArray(img)
        setImages(newImg)
    }

    return (
      <div className="App">
        <header className={'header'}>
            <img className={'header-image'} src={images ? images[0] : ''} alt=""/>
        </header>
          <div className='content'>
              <aside className={'aside-left'}>
                  <img className={'aside-left-img'} src={images ? images[1] : ''} alt=""/>
              </aside>
              <div>
                  <img className={'main-img'} src={images ? images[2] : ''} alt=""/>
                  <button style={{background: color[Math.floor(Math.random() * 11)]}} className={'random-button'} onClick={randomizeImages}>adadsdas</button>
              </div>
              <aside className={'aside-right'} >
                  <img className={'aside-right-img'} src={images ? images[3] : ''} alt=""/>
              </aside>
          </div>
        <footer className={'footer'}>
            <img className={'footer-img'} src={images ? images[4] : ''} alt=""/>
        </footer>
      </div>
  );
}

export default App;
