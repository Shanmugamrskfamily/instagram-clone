import React, { useState } from 'react';
import { PiChatsBold } from 'react-icons/pi';
import OpenModal from './OpenModal';
import Sidenavbar from '../Sidenavbar';

const Messages = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="row">
        <div className="col-lg-2">
          <div className="home-navigation">
            <Sidenavbar />
          </div>
        </div>
        <div className="col-lg-10">
          <div
            className="h-100 d-flex flex-column align-items-center justify-content-center"
            style={{ marginTop: '10rem' }}
          >
            <PiChatsBold style={{ fontSize: '30px' }} />
            <br />
            <span style={{ fontSize: '30px' }}>Your Messages</span>
            <p className="text-center">
              Send private photos and messages to a friend group
            </p>
            <button className="btn btn-primary" onClick={openModal}>
              Send Message
            </button>
            {open ? <OpenModal openmodal={open} closeModal={closeModal} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
