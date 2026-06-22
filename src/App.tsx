import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";



export default function App() {

const contacts=[
  {
id:"1", name:"tata",email:"aine@gmail.com"
  },
   {
id:"2", name:"kisha",email:"kisha@gmail.com"
  }

];

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts ={contacts}/>
    </div>
  );
}




























































































//import { useRef, useEffect, useState } from 'react';

//function App() {
 // return (
  //  <MyComponent />
 // );
//}

//export default function MyComponent() {

  //const ref = useRef(6);
 // const [num, setNum] = useState(0);

 

 // function handleClick() {
    
   // setNum(num + 1);
   // ref.current++;
  
   
    //console.log(ref.current);
   // console.log(num);
 // }

  //return (
   // <div>
    //  <p>Number: {num}</p>
    //  <button onClick={handleClick}>Increment</button>
   // </div>
  //);
//}