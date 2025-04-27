type Point = {
    x: number,
    y: number
}

let viewPoint = (pt:Point) => {
    console.log("The coordinate x value is "+pt.x);
    console.log("The coordinate y value is "+pt.y);
}
viewPoint({x: 5, y: 7})