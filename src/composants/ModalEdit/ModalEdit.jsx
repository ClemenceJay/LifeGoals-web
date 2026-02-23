import React from 'react';

const ModalEdit = ({ goalModal, setModalVisible, setNomGoalToEdit, editGoal, nomGoalToEdit }) => {

    return (
        <div>
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