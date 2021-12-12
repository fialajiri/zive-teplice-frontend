import React from 'react';

import Modal from './modal';


const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="Něco se pokazilo!"
      show={!!props.error}
      footer={<button onClick={props.onClear}>Okay</button>}
    >
      <p className='error-modal__paragraph'>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;