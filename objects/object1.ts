//Objects in typescript

function printCoordinate(pt:{x: number,y: number}){
    console.log("The Coordinate x value is "+pt.x);
    console.log("The Coordinate y value is "+pt.y);
}
printCoordinate({x: 5,y:7});