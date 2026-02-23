import React from 'react';
import './ModalNewChild.module.css';
import styles from './ModalNewChild.module.css';

const ModalNewChild = ({ goalModal, setModalVisible, addChild, newGoalInput, setNewGoalInput}) => {

    return (
        <div className={styles.modaleEnfant}>
            <p>Ajouter un objectif enfant?</p>
            <input value={newGoalInput} onInput={(e) =>{setNewGoalInput(e.target.value)}} placeholder='Objectif enfant'/>
            <div>
                <button onClick={() => addChild(goalModal.id)}>Add</button>
                <button onClick={() => {setModalVisible(false); setNewGoalInput("")} }>ANNULER</button>
            </div>
        </div>
    );
};

export default ModalNewChild;