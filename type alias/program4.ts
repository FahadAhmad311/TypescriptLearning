type Status = "Success" | "Error" | "Loading"
function handleStatus(status:Status){
    if(status == "Success"){
        console.log("Operation is Successfull");
    }
    else if(status == "Error"){
        console.log("Error occurred in operation");
    }
    else{
        console.log("Loading");
    }
}

handleStatus("Success");