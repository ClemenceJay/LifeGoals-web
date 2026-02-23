import React from 'react';
import plusImg from "../../assets/plus.png";
import styles from "./AddGoal.module.css";

const AddGoal = ({ newGoalInput, setNewGoalInput, ajouterGoalParent }) => {

    return (
        <div className={styles.addGoalContainer}>
            <input className={styles.inputAddGoal} value={newGoalInput} onChange={(e) => setNewGoalInput(e.target.value)} placeholder='Nouvelle tache' />
            <img onClick={ajouterGoalParent} src={plusImg} alt='Add Goal' className={styles.addImg} />
        </div>
    );
};

export default AddGoal;