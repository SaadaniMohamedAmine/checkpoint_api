import React,{useState,useEffect} from 'react'
import axios from 'axios'

const UserList = () => {
    const[listOfUSer,setListOfUSer]=useState([]) ;
    useEffect(()=>{
        axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then((res)=>{
              setListOfUSer(res.data) ;
            }) 
          .catch((err)=>{console.log(err)}) 

    },[])
    
    return (
        <div>
             <h4>List of users</h4>
             {listOfUSer.map((user)=>(
                 <div>
                     {user.name}
                 </div>
             ))}
        </div>
    )
}

export default UserList
