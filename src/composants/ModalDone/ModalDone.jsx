import React from 'react';

const ModalDone = ({ goalModal, setModalVisible, markAsDoneGoal }) => {

    return (
        <div>
            <p>Bravo !</p>
            <button onClick={() => {
                setModalVisible(false);
                markAsDoneGoal(goalModal);
            }}>CONTINUER</button>
        </div>
    );
};


export default ModalDone;