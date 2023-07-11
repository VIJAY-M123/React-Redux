import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoaction, deletetodo, updatetodo } from '../Actions/Actions';
import { Table } from "reactstrap"

function Todo() {

  const dispatch = useDispatch();
  const datas = useSelector(state => state.todoReducer.todo)

  console.log("Datas", datas);


  const [Input, setInput] = useState({
    Title: "",
    Description: ""
  })


  const [Data, setData] = useState([]);
  const [Updates, setUpdates] = useState(null);



  useEffect(() => {
    setData(datas);
  }, [datas])



  const onChange = (e) => {

    setInput({ ...Input, [e.target.name]: e.target.value })

  }

  const submit = (e) => {
    e.preventDefault()
    if (Updates) {
      dispatch(updatetodo(Input.Title, Input.Description));
      setUpdates(null);
    }
    else {
      dispatch(todoaction(Input.Title, Input.Description));
    }

    setInput({
      Title: "",
      Description: ""
    })
  }

  const Delete = (obj) => {
    dispatch(deletetodo(obj));


  }

  const update = (obj) => {
    setInput({
      Title: obj.Title, Description: obj.Description
    })
    setUpdates(obj);
  }


  return (
    <div>
      Todo

      <input type="text" placeholder='Title' name="Title" value={Input.Title} onChange={onChange} />
      <input type="text" placeholder='Description' name="Description" value={Input.Description} onChange={onChange} />
      <button onClick={submit}>Add</button>

      <Table striped bordered hover style={{ width: "70%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((obj, index) => (
            <tr key={index}>
              <td>{obj.Title}</td>
              <td>{obj.Description}</td>
              <td>{obj.Password}
                <button onClick={() => Delete(obj)} >Delete</button>
                <button onClick={() => update(obj)} >Update</button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>



    </div>


  )
}

export default Todo