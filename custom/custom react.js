// function customRender(reactElement, container){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)  
//     container.appendChild(domElement)
// }
// //first we will create a react element <a href="https://google.com" target="_blank">click me to visit google </a>;
// const reactElement = {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google '
// }


// const mainconatiner = document.querySelector("#root")

// customRender(reactElement, mainconatiner)




/****************** 2nd method ***************** */
function customRender(mainconatiner){
    const domElement=document.createElement('a');
     const helement=document.createElement('h1');
     helement.innerHTML=('hi i am husnain abid ');
    domElement.innerHTML= 'click me to visit my email'
    domElement.setAttribute('href','https://google.com');
    domElement.setAttribute('target','_blank');
    mainconatiner.append(domElement,helement);
}
const mainconatiner = document.querySelector('#root');
customRender(mainconatiner);