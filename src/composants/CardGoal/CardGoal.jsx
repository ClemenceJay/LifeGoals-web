import React from 'react';
import undoImg from './../../assets/undo.png';
import checkMarkImg from './../../assets/check-mark.png';
import addGoalImg from './../../assets/addGoal.png';
import trashImg from './../../assets/trash.png';
import styles from './CardGoal.module.css';

const CardGoal = ({goal, openModal}) => {

    // Modification de l'image si le goal est marqué comme "done" ou pas
    const sourceImageDone = goal.done ? undoImg : checkMarkImg;
    const altImageDone = goal.done ? 'undo' : 'done';

    // On affiche le bouton "done" uniquement aux taches qui n'ont pas d'enfant
    // On affiche le bouton d'ajout d'enfant uniquement aux taches qui n'ont pas de parents

    return (
        <div className={styles.cardGoal}>
            <button onClick={() => openModal(goal, "edit")} className={styles.textCardGoal}>{goal.nom}</button>
            <div className={styles.actionCardGoal}>
                {goal.child.length === 0 ?
                    <img onClick={() => openModal(goal, "done")} src={sourceImageDone} alt={altImageDone} className={styles.imgCardGoal}/> : null}
                {goal.parent == null && !goal.done ?
                        <img onClick={() => openModal(goal, "newchild")} src={addGoalImg} alt='Add child goal' className={styles.imgCardGoal}/> : null}
                <img onClick={() => openModal(goal, "del")} src={trashImg} alt='Delete goal' className={styles.imgCardGoal}/>
            </div>
        </div>
    );
};


export default CardGoal;