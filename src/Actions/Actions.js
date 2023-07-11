export const increment = () =>({
    type:"INCREMENT"
})

export const decrement = () =>({
    type:"DECREMENT"
})

export const vijay = () =>({
    type:"VIJAY"
})

export const ajai = () =>({
    type:"AJAI"
})


export const todoaction = (Title, Description)=>({
    type:"TODO",
    payload:{Title, Description}
})



export const deletetodo = (obj) =>({
    type:"DELETE",
    payload:obj.Title
})

export const updatetodo = (Title,Description) =>({
    type:"UPDATE",
    payload:{
        Title,Description
    }
})

export const ApiUser = () =>{
    return(dispatch)=>{

        try{
              fetch("https://jsonplaceholder.typicode.com/users")
              .then(Res=>Res.json())
              .then(Result=>{
                console.log("Result",Result);
                dispatch({type:"USER", payload:Result})
              })
        }
        catch(error){
            dispatch({type:"ERORR", payload:error.message})
        }

    }
}

export const DeleteApi =(item) =>({
    
  type:"DELETEAPI",
  payload:item.name
})