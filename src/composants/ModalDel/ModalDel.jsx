import React from 'react';
import styles from './ModalDel.module.css';

const ModalDel = ({ goalModal, setModalVisible, deleteGoal }) => {

    return (
        <div className={styles.modaleEnfant}>
            <span>Etes vous sûr de vouloir supprimer ce goal ?</span>
            <div>
                <button onClick={() =>  deleteGoal(goalModal)}>OUI</button>
                <button onClick={() => setModalVisible(false)}>ANNULER</button>
            </div>
        </div>
    );
};


export default ModalDel;