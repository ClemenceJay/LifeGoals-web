import React from 'react';

const DisplayGoalDone = ({ toggleDisplayDone, displayDone }) => {
    let buttonTitle = displayDone? "Masquer mes goals terminés" : "Afficher tous mes goals";
    return (
        <button onClick={() => toggleDisplayDone()}>{buttonTitle}</button>
    );
};

export default DisplayGoalDone;