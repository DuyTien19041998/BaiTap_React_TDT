import React from 'react';
import './App.css';
import './component/Color'
import Color from './component/Color';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Page color</h1>
        <h2>By Tran Duy Tien</h2>
        <h3>Great for learning css and design interface</h3>
      </header>
      <section className='table'>
        <div className="block1">
          <Color id='1' name='yellow' color='yellow'></Color>
          <Color id='2' name='AliceBlue' color='#F0F8FF'></Color>
          <Color id='3' name='AntiqueWhite' color='#FAEBD7'></Color>
          <Color id='4' name='Aqua' color='#00FFFF'></Color>
          <Color id='5' name='Aquamarine' color='#7FFFD4'></Color>
          <Color id='6' name='Azure' color='#F0FFFF'></Color>
          <Color id='7' name='Beige' color='#F5F5DC'></Color>
          <Color id='8' name='Bisque' color='#FFE4C4'></Color>
        </div>
        <div className="block2">
          <Color id='9' name='blue' color='blue'></Color>
          <Color id='10' name='BlueViolet' color='#8A2BE2'></Color>
          <Color id='11' name='Brown' color='#A52A2A'></Color>
          <Color id='12' name='BurlyWood' color='#DEB887'></Color>
          <Color id='13' name='CadetBlue' color='#5F9EA0'></Color>
          <Color id='14' name='Chartreuse' color='#7FFF00'></Color>
          <Color id='15' name='Chocolate' color='#D2691E'></Color>
          <Color id='16' name='CornflowerBlue' color='#6495ED'></Color>

        </div>
        <div className='block3'>
          <Color id='17' name='DarkBlue' color='#00008B'></Color>
          <Color id='18' name='DarkCyan' color='#008B8B'></Color>
          <Color id='19' name='DarkGoldenRod' color='#B8860B'></Color>
          <Color id='20' name='DarkGray' color='#A9A9A9'></Color>
          <Color id='21' name='DarkGreen' color='#006400'></Color>
          <Color id='22' name='DarkOrchid' color='#9932CC'></Color>
          <Color id='23' name='DarkRed' color='#8B0000'></Color>
          <Color id='24' name='DeepPink' color='#FF1493'></Color>
        </div>
      </section>
      <footer>
        <p className='copy'>Copy right by Trần Duy Tiền</p>
        <p className='content'>
          Recommended needle : Homemachine Topsbish #90/10 . Deep learning (MR 3.5)
        </p>
        <p className='phone'> (800) 499 - 1777 <b>www.facebook.com</b></p>
      </footer>
    </div>
  );
}

export default App;
