/**
 * 
 * * our symbols for our story are:
 * * - turtle
 * * - arrow
 * * - keyhole
 * * - key
 * * - bee
 * 
 * * Thanks for being awesome.  Lets make something cool!
 * 
 * @param {*} beeName  - a string for the name of the bee
 * @param {*} beeColour - a string for the colour of the bee
 * @param {*} beeSize - a number for the size of the text showing the bee
 */

function describeBee(beeName, beeColour, beeSize){
    console.log(`%c ${beeName} is ${beeColour}`,`color:${beeColour};font-size:${beeSize}px`);
};

describeBee("Beetrice","purple",22);