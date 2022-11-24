import './App.css';
import * as math from "mathjs";

import Button from './components/button';
import Input  from './components/input';
import {useState} from 'react';


const App = ()  => {
 
  const[text, setText] = useState("");
  const[result, setResult] = useState("");


  const addToText = (val) => {
    setText((text) => [...text,val + ""]);

   
  };

  const calculateResult = () => {

    const input = text.join("");

    setResult(math.evaluate(input));

    return result
  
  };


  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <>
    <h1 className='calc'>Calculator App</h1>
    <div className="App">
    <div className="calculator">
  
    <Input text={text} result= {result} />
    <div className='row'>
      <Button sym="7" handleClick={addToText} />
      <Button sym="8" handleClick={addToText}/>
      <Button sym="9" handleClick={addToText}/>
      <Button sym="*" color="orangered" handleClick={addToText}/>
      </div>
      <div className='row' >
      <Button sym="4" handleClick={addToText}/>
      <Button sym="5" handleClick={addToText}/>
      <Button sym="6" handleClick={addToText}/>
      <Button sym="-" color="orangered" handleClick={addToText}/>
      </div>
      <div className='row' >
      <Button sym="1" handleClick={addToText}/>
      <Button sym="2" handleClick={addToText}/>
      <Button sym="3" handleClick={addToText}/>
      <Button sym="+" color="orangered" handleClick={addToText}/>
      </div>
      <div className='row' >
      <Button sym="0" handleClick={addToText}/>
      <Button sym="." color="orangered" handleClick={addToText} />
      <Button sym="/" color="orangered" handleClick={addToText}/>
      <Button sym="=" color="orangered" handleClick={calculateResult}/>
      </div>
      <Button sym="Clear" color="red" handleClick={resetInput} />
    </div>
      </div>
    </>
  );
}

export default App;
