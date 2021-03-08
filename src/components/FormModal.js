import React from 'react';
import Modal from 'react-modal';
import Form from './Form';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

 
const FormModal = (props) => {
  const { modalIsOpen, setOpen, setId, id, editData, handleChange, handleDateChange, validateFormSave, cancel } = props
 
  function closeModal(){
    setOpen(false)
    setId(null)
  }
 
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Form 
            id={id}
            editData={editData}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
            validateFormSave={validateFormSave}
            cancel={cancel}
          />
        </Modal>
      </div>
    );
}

export default FormModal
