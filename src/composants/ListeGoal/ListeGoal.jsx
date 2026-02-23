import React from 'react';
import CardGoal from "../CardGoal/CardGoal.jsx";

const ListeGoal = ({listeGoal, displayDone, openModal}) => {

    let listToDisplay = listeGoal;

    // On créé une nouvelle liste sans les goal avec le statut done (sauf si on demande l'affichage de ces goal)
    if (!displayDone) {
        listToDisplay = listToDisplay.filter((goal) => !goal.done)
    }

    return (
        <div>
            {listToDisplay.map((goal) => {
                return <CardGoal key={goal.id} goal={goal} openModal={openModal}/>
            })}
        </div>
    );
};

export default ListeGoal;