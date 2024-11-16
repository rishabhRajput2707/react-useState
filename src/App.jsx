import React, { useState } from 'react'

// const App = () => {
//   const [val, setval] = useState({
//     name: "Rishabh" , isBanned: false
//   })
//   return (
    
//     <div className='h-screen w-full bg-zinc-300 flex flex-col items-center justify-center gap-2'>
//       <h1>name : {val.name}</h1>
//       <h1>banned : {val.isBanned.toString()}</h1>
//       <button onClick={()=> setval({...val , isBanned: !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? "bg-blue-600" :"bg-red-600" } rounded-full text-xs text-white`}>Change</button>
//     </div>
//   )
// }




// const App = () => {
//   const [val, setval] = useState([1,2,3,4,5,6])
//   return (
//     <div className='px-5'>
//       {val.map(item => <h1>{item}</h1>)}
//       <button onClick={()=> setval(()=> val.filter((item , index)=> index != val.length - 1))} className='px-3 py-1 rounded-md bg-blue-600 text-white'>Click</button>
//     </div>
//   )
// }




const App = () => {
  const [val, setval] = useState([
    {name: 'ayush' , age : 23},
    {name: 'abhay' , age : 27},
    { name: 'manish' , age : 30},
    {name: 'mannu' , age : 20},
]);
  return (
    <div className='px-5'>
      {val.map((item) => (
        <div>
        <h1>{item.name}</h1>
        <h1>{item.age}</h1>

        </div>
      ))}
      <button onClick={()=> setval(()=> val.map((item)=> item.name === "ayush" ? ({name: "ayush", age: 24}) : item))} className='px-3 py-1 rounded-md bg-blue-600 text-white'>Click</button>
    </div>
  )
}

export default App