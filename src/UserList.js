import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

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
        <div className='list'>
             <h4 className='list-title'>List of users</h4>
             <ul className='list-ord'>
             {listOfUSer.map((user)=>(
                 <li className='item'>
                     {user.name}
                 </li>
             ))}
             </ul>
        </div>
    )
}

export default UserList
