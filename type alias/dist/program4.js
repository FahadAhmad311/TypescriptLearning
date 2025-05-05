"use strict";
function handleStatus(status) {
    if (status == "Success") {
        console.log("Operation is Successfull");
    }
    else if (status == "Error") {
        console.log("Error occurred in operation");
    }
    else {
        console.log("Loading");
    }
}
handleStatus("Success");
//# sourceMappingURL=program4.js.map