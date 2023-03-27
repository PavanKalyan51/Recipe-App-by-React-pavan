import React, { useState } from 'react'
import Products from './Components/Products'

const App = () => {
  const [search ,setSearch]=useState('')
  const [data,setData]=useState([])
  const YOUR_APP_KEY='4b7605a4577a89fbf8f216f66f723e86'
  const YOUR_APP_ID='2320d5ce'
  const SubmitHandler=(e)=>
  {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=25&calories=591-722&health=alcohol-free
    `)
    .then(res=>res.json())
    .then(data=>setData(data.hits))
  }
  return (
    <div className='App'>
     <center>
     <h3>Food Recipe App</h3>
      <form onSubmit={SubmitHandler}>
        <input type='text'  value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search With recipe Name like (chicken)"/><br/>
        <input type='Submit' value='search' className='btn btn-primary'/>
      </form>
      {data.length>=1?<Products data={data} />:null}
     </center>
    </div>
  )
}

export default App
