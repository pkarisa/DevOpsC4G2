// Definition
const playerObject = { 'name': 'Ronaldo', 'shirtNumber': 7, 'team': 'Manchester United' };
// 1. Retrieve items inside an object
// console.log(playerObject['team']);
// console.log(playerObject.team);

// 2. Add items into an object
// playerObject['goalsScored'] = 701;
// console.log(playerObject);

// 3. Delete items from an object
// delete playerObject.name;
// console.log(playerObject);

// 4. Loop
for (const key in playerObject) {
    if (key == 'name') {
        console.log('This is an if clause')
    } else {
        console.log(key,'->',playerObject[key]);
    }
}
