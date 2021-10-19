let toDo = ['clean the apartment', 'go to the gym', 'go shopping', 'meditate', 'socialise with friends'];
let why = ['you feel great', 'you can get it out of the way', 'the wife will stop nagging you', 'you can check it off your list', 'you dont have to think about it anymore'];

function randomiseArray(array) {
    return Math.floor(Math.random() * array.length);
}

function giveRandomMinutes() {
    return Math.floor(Math.random() * 181);

}

function generateList() {
    let resultMessage = [];
    resultMessage.push(`Today you should ${toDo[randomiseArray(toDo)]}`);
    resultMessage.push(`which will only take you ${giveRandomMinutes()} minutes`)
    resultMessage.push(`so that ${why[randomiseArray(why)]}.`);

    return resultMessage.join(' ');
}

console.log(generateList());
