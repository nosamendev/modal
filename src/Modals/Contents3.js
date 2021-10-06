import React from 'react';

const Contents3 = (props) => {
    return (
        <div>
            <p>contents3</p>
            <button onClick={() => props.closeModal(null)}>OK inside Contents3</button>
        </div>
    )
}

export default Contents3;