
const BASE_API_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_API_URL}/users`;


async function createUser(){
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const roleID = document.getElementById('role_id').value;
    


    const user ={
        username: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        roleID: roleID,
    };

    const userJSON = JSON.stringify(user);

    //posting information to servlet

    const response = await fetch(RESOURCE_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: userJSON,
        
    });
    if (response.status == 204) {
       alert("Successfully Registered!");
        document.getElementById('username').value = "";
        document.getElementById('email').value = "";
        document.getElementById('fName').value = "";
        document.getElementById('lName').value = "";
        document.getElementById('pwd').value = "";
        location.href = "./../index.html";
      } else {
        alert("Something went wrong...");
      }
     
}