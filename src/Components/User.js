import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApiUser, DeleteApi } from '../Actions/Actions';

function User() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.ApiReducer.User);

    console.log("User", user);

    const[UserData, setUserData]=useState([]);


    useEffect(()=>{
        setUserData(user)
    })


    const User = () =>{
        dispatch(ApiUser());
    }


    const Delete = (item) =>{
        console.log("Item",item.name);
        dispatch(DeleteApi(item))

    }
    return (
        <div>
            <h3>Users</h3>
            <button onClick={User}>Get Users</button>

            {UserData.map((item)=>(
                <h4>
                    {item.name} <button onClick={()=>Delete(item)}>Delete</button>
                </h4>
            ))}
        </div>


    )
}

export default User