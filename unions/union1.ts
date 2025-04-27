const printId = (id: number | string) => {
    console.log("Your ID is "+id);
}
printId("SE120212009");
printId({id: 203})//Argument of type '{ id: number; }' is not assignable to parameter of type 'string | number'