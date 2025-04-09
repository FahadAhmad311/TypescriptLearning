//Anonymous function..
const names = ['Fahad','Ahmad','Jawad']
names.forEach(function (s){
    console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
  });