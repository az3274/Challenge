import React from 'react';
import { convertDate } from '../util';

const Form = (props) => {
    const { id, editData, handleChange, handleDateChange, validateFormSave, cancel } = props;
    return (id && editData &&
        (<form key={'form'} style={{border: '1px solid', margin: '10px 0px', padding: 10}}>
          <h1>Employee Details</h1>
          <div>
            <p style={{ display: 'inline-block'}}>id:</p>
            <input
              type="text"
              value={editData.id}
              readOnly
            />
          </div>
          <div>
            <p style={{ display: 'inline-block'}}>name:</p>
            <input
              type="text"
              id="name"
              value={editData.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <p style={{ display: 'inline-block'}}>emailId:</p>
            <input
              type="text"
              value={editData.emailId}
              id="emailId"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <p style={{ display: 'inline-block'}}>aadharNumber:</p>
            <input
              type="text"
              value={editData.aadharNumber}
              id="aadharNumber"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <p style={{ display: 'inline-block'}}>panNumber:</p>
            <input
              type="text"
              value={editData.panNumber}
              id="panNumber"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <p style={{ display: 'inline-block'}}>employeeType:</p>
            <input type="radio" name="Full-Time" id="employeeType" onChange={(e) => handleChange(e)} checked={editData.employeeType === 'Full-Time'}/> Full-Time
            <input type="radio" name="Part-Time" id="employeeType" onChange={(e) => handleChange(e)} checked={editData.employeeType === 'Part-Time'}/> Part-Time
          </div>
          <div>
            <p style={{ display: 'inline-block'}}>joiningDate:</p>
            <input
              type="date"
              value={convertDate(editData.joiningDate)}
              id="joiningDate"
              onChange={(e) => handleDateChange(e)}
            />
          </div>
          <input type="button" value="Save" onClick={() => validateFormSave()}></input>
          <input type="button" value="Cancel" onClick={() => cancel()}></input>
        </form>
        )
    )
}

export default Form