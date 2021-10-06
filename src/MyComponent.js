import React, {useState} from 'react';
import Modal from './Modals/Modal';
import Contents3 from './Modals/Contents3';

const MyComponent = () => {
    //Modala vurvi s local state v komponenta koito go sudurja:
    const [modalOpen, setModalOpen] = useState(null);

    return (
        <div>
            <p>MyComponent</p>
            <button onClick={() => setModalOpen(true)}>Open Modal 3</button>
            { modalOpen ? 
                <Modal handleModalClose={() => setModalOpen(null)}>
                    <Contents3 closeModal={() => setModalOpen(null)} />
                    <button onClick={() => setModalOpen(null)}>OK</button>
                </Modal>
            : null}
        </div>
    )
}

export default MyComponent;