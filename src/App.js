import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import FormModal from './components/FormModal';
import employee_data from './employee_data.json';
import { validateSchema } from './schema';
import { convertDate } from './util';

function App() {
  const [empData, setEmpData] = useState(employee_data.data);
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(null);
  const [editData, setEditData] = useState({});
  const updateDetails = (id, modal) => {
    setId(id)
    const data = empData.filter(v => v.id === id)
    setEditData({...data[0]})
    if(modal) {
      setOpen(true)
    }
  }
  const validateFormSave = () => {
    const {
      error,
    } = validateSchema.validate({...editData})
    if (error) {
      alert(error)
    } else {
      const data = [...empData];
      const { id } = editData;
      let index = null;
      data.map((r, i) => {
        if(r.id === id)  {
          index = i;
          return r
        }
        return 0;
      })
      data.splice(index, 1);
      data.splice(index, 0, editData);
      console.log(data, "jkjk")
      setEmpData([...data])
      setId(null)
      setOpen(false)
    }
  }

  const cancel = () => {
    setId(null)
    setOpen(false)
  }

  const handleChange = (e) => {
    const { value, id, name } = e.target;
    console.log(value, id, name)
    if (name === 'Full-Time' || name === 'Part-Time') {
      setEditData(state => ({
        ...state,
        [id]: name
      }))
    } else {
      setEditData(state => ({
        ...state,
        [id]: value
      }))
    }
  }
  const handleDateChange = (e) => {
    const { value, id } = e.target;
    const d = convertDate(value);
    setEditData(state => ({
      ...state,
      [id]: d
    }))
  }
  const table = empData.map((value, key) =>
    <tr key={key}>
      <td>{value.id}</td>
      <td>{value.name}</td>
      <td>{value.emailId}</td>
      <td>{value.aadharNumber}</td>
      <td>{value.panNumber}</td>
      <td>{value.employeeType}</td>
      <td>{value.joiningDate}</td>
      <td><button onClick={() => updateDetails(value.id, false)}>Edit</button></td>
      <td><button onClick={() => updateDetails(value.id, true)}>Modal Edit</button></td>
    </tr>
  )
  return (
    <div className="App">
      <table style={{width:"100%"}} key={'tab'}>
      <thead>
        <tr>
          <th>Eid</th>
          <th>Name</th> 
          <th>EmailId</th>
          <th>AadharNumber</th>
          <th>PanNumber</th>
          <th>EmployeeType</th>
          <th>JoiningDate</th>
          <th>Edit</th>
          <th>Modal Edit</th>
        </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
      {id && editData && !open &&
          <Form 
            id={id}
            editData={editData}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
            validateFormSave={validateFormSave}
            cancel={cancel}
          />
      }
      <FormModal 
        modalIsOpen={open}
        setOpen={setOpen}
        setId={setId}
        id={id}
        editData={editData}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
        validateFormSave={validateFormSave}
        cancel={cancel}
      />
    </div>
  );
}

export default App;
