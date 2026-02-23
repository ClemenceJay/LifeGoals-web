import React from 'react';
import addGoalImg from "../../assets/addGoal.png";
import styles from "./AddGoal.module.css";

const AddGoal = ({ newGoalInput, setNewGoalInput, ajouterGoalParent }) => {
console.log(newGoalInput);
    return (
        <div>
            <input value={newGoalInput} onChange={(e) => setNewGoalInput(e.target.value)} placeholder='Nouvelle tache'/>
            <img onClick={ajouterGoalParent} src={addGoalImg} alt='Add Goal' className={styles.addImg} />
        </div>
    );
};

export default AddGoal;