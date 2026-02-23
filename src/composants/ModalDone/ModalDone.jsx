import React from 'react';
import styles from './ModalDone.module.css';

const ModalDone = ({ goalModal, setModalVisible, markAsDoneGoal }) => {

    return (
        <div className={styles.modaleEnfant}>
            <p>Bravo !</p>
            <button onClick={() => {
                setModalVisible(false);
                markAsDoneGoal(goalModal);
            }}>CONTINUER</button>
        </div>
    );
};


export default ModalDone;