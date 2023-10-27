console.log('🟥 🟦 🟩 🟨');

redSquares = 1;
blueSquares = 1;
greenSquares = 1;
yellowSquares = 1;

function onRedClick() {
    console.log(`Clicked the red block`);

    let redClick = document.getElementById("blocks");
    redSquares ++;
    redClick.innerHTML += `<div class= "block red-fill" onclick="deleteRed(event)"></div>`;

    console.log('Red:', redSquares);
    document.getElementById("red-count").textContent = redSquares;
}

function onBlueClick() {
    console.log("Clicked the blue block");

    let blueClick = document.getElementById("blocks");
    blueClick.innerHTML += `<div class= "block blue-fill" onclick="deleteBlue(event)"></div>`;
    blueSquares ++;
    console.log('Blue:', blueSquares);
    document.getElementById("blue-count").textContent = blueSquares;
}

function onGreenClick() {
    console.log(`Clicked the green block`);

    let greenClick = document.getElementById("blocks");
    greenClick.innerHTML += `<div class= "block green-fill" onclick="deleteGreen(event)"></div>`;
    greenSquares ++ ;
    console.log('Green:', greenSquares);
    document.getElementById("green-count").textContent = greenSquares;
}

function onYellowClick() {
    console.log(`Clicked the yellow block`);

    let yellowClick = document.getElementById("blocks");
    yellowClick.innerHTML += `<div class= "block yellow-fill" onclick="deleteYellow(event)"></div>`;
    yellowSquares ++
    console.log('Yellow:', yellowSquares);
    document.getElementById("yellow-count").textContent = yellowSquares;
}

function deleteRed(event) {
    // Thought this would be a nice touch;
    // logs how many squares are left when deleting one
    console.log(`Deleted red, ${redSquares -1} left`); 

    event.target.remove();
    redSquares --;
    document.getElementById("red-count").textContent = redSquares;
    console.log("Red:", redSquares);
}
function deleteBlue(event) {
    console.log(`Deleted blue, ${blueSquares -1} left`);

    event.target.remove();
    blueSquares --;
    document.getElementById("blue-count").textContent = blueSquares;
}
function deleteGreen(event) {
    console.log(`Deleted green, ${greenSquares -1} left`);

    event.target.remove();
    greenSquares --;
    document.getElementById('green-count').textContent = greenSquares;
}
function deleteYellow(event) {
    console.log(`Deleted yellow, ${yellowSquares -1} left`);

    event.target.remove();
    yellowSquares --;
    document.getElementById('yellow-count').textContent = yellowSquares;
}