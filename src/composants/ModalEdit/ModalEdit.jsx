import React from 'react';
import styles from './ModalEdit.module.css';

const ModalEdit = ({ goalModal, setModalVisible, setNomGoalToEdit, editGoal, nomGoalToEdit }) => {

    return (
        <div className={styles.modaleEnfant}>
            <p>Modifier le goal</p>
            <input value={nomGoalToEdit} onInput={(e) => {setNomGoalToEdit(e.target.value)}}/>
            <div>
                <button onClick={() => setModalVisible(false)}>ANNULER</button>
                <button onClick={() => editGoal(goalModal.id)}>Valider</button>
            </div>
        </div>
    )
};


export default ModalEdit;