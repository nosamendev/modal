import React, {useState} from 'react';
import Modal from './Modals/Modal';
import Contents1 from './Modals/Contents1';
import Contents2 from './Modals/Contents2';
import MyComponent from './MyComponent';

const App =  () => {

  const [currentModal, setCurrentModal] = useState(null);

  return (
    <div>
      <button id="button1" className="button" onClick={() => setCurrentModal('modal1')}>Open Modal 1</button>
      <button className="button" onClick={() => setCurrentModal('modal2')}>Open Modal 2</button>     
      
      {currentModal ? (
        <Modal handleModalClose={() => setCurrentModal(null)}>
           {currentModal === "modal1" ? <Contents1 /> : <Contents2 />}
        </Modal>
      ): null}
      
      <MyComponent />
    </div>
  );
}

export default App;