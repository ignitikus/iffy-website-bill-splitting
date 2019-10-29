const result = window.prompt('Please, type in your Total, tip% and party size','100 15 2').split(' ');

const overall = Number(result[0]);
const tip = Number(result[1]);
const party = Number(result[2]);

function tipOutput(tip){
    if (tip >=25){
        return " What a generous tip!";
    } else if (tip >=10 && tip <25){
        return " Thank you, come again!";
    } else {
        return " Thanks, I guess.";
    }
}

function noParty (party){
    if (party >= 1) {
    return party;
    } else {
        return party = 1;
    }
}

function resulting(overall, tip, party){
    const total = overall * (tip) / 100 + overall;
    const result = total / noParty(party);
    return isNaN(result) ? `I'm sorry Dave, I'm afraid I can't process words.` : result +'$' + tipOutput(tip)
}

const answer = resulting(overall, tip, party)


const printAnswer = document.querySelector('#result');
printAnswer.innerText = answer



