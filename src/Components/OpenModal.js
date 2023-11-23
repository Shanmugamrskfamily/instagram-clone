import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './OpenModal.css';
import { TbPhotoVideo } from 'react-icons/tb';

const OpenModal = ({ openmodal, closeModal }) => {
  return (
    <div>
      <Modal open={openmodal} onClose={closeModal} center>
        <div className="modal-div d-flex flex-column align-items-center">
          <p className="text-center fs-5 p-2" style={{ borderBottom: '2px solid black', fontWeight: '500' }}>
            Create New Post
          </p>
          <TbPhotoVideo className="icon" />
          <br />
          <br />
          <p>Drag photos and videos here</p>
          <button className="btn btn-primary">Select from computer</button>
        </div>
      </Modal>
    </div>
  );
};

export default OpenModal;
