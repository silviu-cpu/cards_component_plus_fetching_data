   import {useState, useEffect} from 'react'
   
   function FetchData() {
       
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
   
   
    
    useEffect(() =>{
        async function fetchingData() { 
            const res = await fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
                 res
                      .json()
                      .then((data) => setData(data))
                      .catch((error) => setError(error))
        }
        
        fetchingData();
    }, [])

    if(error) console.log(error)
    
    

    return data;
    
           
    
   }
   
   export default FetchData
  