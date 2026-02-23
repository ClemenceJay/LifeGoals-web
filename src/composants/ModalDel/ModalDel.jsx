import React from 'react';

const ModalDel = ({ goalModal, setModalVisible, deleteGoal }) => {

    return (
        <div>
            <span>Etes vous sûr de vouloir supprimer ce goal ?</span>
            <div>
                <button onClick={() =>  deleteGoal(goalModal)}>OUI</button>
                <button onClick={() => setModalVisible(false)}>ANNULER</button>
            </div>
        </div>
    );
};


export default ModalDel;