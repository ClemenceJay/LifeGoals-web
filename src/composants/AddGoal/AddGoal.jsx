import React from 'react';

const AddGoal = ({ newGoalInput, setNewGoalInput, ajouterGoalParent }) => {
console.log(newGoalInput);
    return (
        <div>
            <input value={newGoalInput} onChange={(e) => setNewGoalInput(e.target.value)} placeholder='Nouvelle tache'/>
            <button onClick={ajouterGoalParent}>Add</button>
        </div>
    );
};

export default AddGoal;