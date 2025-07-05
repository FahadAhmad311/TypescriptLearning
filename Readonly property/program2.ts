interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 /*
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  /*home.resident = {
Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };*/

visitForBirthday({resident:{name:"Fahad",age:22}})