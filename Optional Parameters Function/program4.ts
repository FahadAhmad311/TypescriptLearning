function display(id: number, label?: string) {
  console.log("ID:", id);
  if (label !== undefined) {
    console.log("Label:", label);
  }
}

display(101);                  
display(102, "Student ID");    
