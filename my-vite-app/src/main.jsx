 import React from "react";
 import { createRoot } from "react-dom/client";
  import App from './App.jsx'

// const Element = React.createElement(
//   'a',
//   {href:'https//google.com', target:'_blank'},
//   'Click me plz'   
// )

createRoot(document.getElementById('root')).
render(
  <>
  /* {Element}  // This is how we can create a React element using React.createElement method */
  <App />
</>
)

  //jis trha hum na custom react ma ik function banyia ta reactelement ka name sa isi trha hum is trha bi direct element create kar sakta ha
  //ikr kio varible declare krna ho tu function ka end ma karna hota ha;
