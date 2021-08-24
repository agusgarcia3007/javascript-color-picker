import react from 'react'
import reactDom from 'react-dom'

const Picker=()=>{

  let outputBox = document.querySelector(".output");
  let getBody = document.body;

  function getValue(){
    let red=document.getElementById('red').value;
    let green=document.getElementById('green').value;
    let blue=document.getElementById('blue').value

    getBody.style.background=`rgb(${red},${green},${blue})`;
    outputBox.innerHTML=`rgb(${red},${green},${blue})`
  }

  function copy(){
    let element = document.createElement('textarea');
    element.value = outputBox.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    alert('Copied!')
  }

    return(
      <div className="container">
        <div className="sliders">
          <label>R</label>
          <input type="range" min='0' max='255' value='0'onChange= {getValue()} id="red" />
          <label>G</label>
          <input type="range" min='0' max='255' value='0'onChange={getValue()} id="green" />
          <label>B</label>
          <input type="range" min='0' max='255' value='0'onChange={getValue()}id="blue" />
          <div className="output-box">
            <div className="output">rgb(0,0,0)</div>
            <div className="copyBtn" onClick={copy()}><i className="fa fa-clone" aria-hidden='true'></i></div>
          </div>
        </div>
      </div>
    )
  
  }

  export default Picker