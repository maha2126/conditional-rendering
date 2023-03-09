import {useState} from 'react'
import OrderedList from './OrderedList'
import UnorderedList from './UnorderedList'


function App() {
  
  const [writers, setWriters] = useState([
    "Kafka", "Saramago", "Shakespeare", "Joyce", "Dostoevsky"
  ]);
  const [log, setLog] = useState(null)
  const [status, setStatus] = useState(false)
  
/*   if(status){
    return <OrderedList data={writers}/>
  }
  else{
    return <UnorderedList data={writers}/>
  } */
/*   return <div>
      <OrderedList data={writers}/>
      <UnorderedList data={writers}/>

    </div> */

    return <div>
      <h3>{log}</h3>
      <button onClick={()=> setStatus(!status)}>Switch</button>
      {status? <p>Ordered</p>:<p>Unordered</p>}
      {
        status ? 
        <OrderedList fn={setLog}  data={writers}/>
        :
        <UnorderedList fn={setLog} data={writers}/>
      }
    </div>
}

export default App;
