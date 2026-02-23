import React from 'react';

import styles from './ModaleGenerale.module.css';
import ModalDel from "../ModalDel/ModalDel.jsx";
import ModalEdit from "../ModalEdit/ModalEdit.jsx";
import ModalDone from "../ModalDone/ModalDone.jsx";
import ModalNewChild from "../ModalNewChild/ModalNewChild.jsx";

const ModaleGenerale = ({ typeModale, setModalVisible, goalModal, deleteGoal, editGoal, setNomGoalToEdit, nomGoalToEdit, markAsDoneGoal, addChild, newGoalInput, setNewGoalInput }) => {

    // Affichage des modales selon le type d'action
    return (
        <div className={styles.modaleGenerale}>
            {typeModale ==='del'? <ModalDel setModalVisible={setModalVisible} goalModal={goalModal} deleteGoal={deleteGoal}/> : null}
            {typeModale ==='edit'? <ModalEdit setModalVisible={setModalVisible} goalModal={goalModal} editGoal={editGoal} setNomGoalToEdit={setNomGoalToEdit} nomGoalToEdit={nomGoalToEdit}/> : null}
            {typeModale ==='done'? <ModalDone setModalVisible={setModalVisible} goalModal={goalModal} markAsDoneGoal={markAsDoneGoal}/> : null}
            {typeModale ==='newchild'? <ModalNewChild setModalVisible={setModalVisible} goalModal={goalModal} addChild={addChild} newGoalInput={newGoalInput} setNewGoalInput={setNewGoalInput}/> : null}
        </div>
    );
};

export default ModaleGenerale;