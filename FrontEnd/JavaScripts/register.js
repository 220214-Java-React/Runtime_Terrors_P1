
const BASE_API_URL = "http://localhost:8080/api";
const Recourse_URL = `${BASE_API_URL}/users`;

async function createUser(){
    const username = document.getElementById('Username').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const userId = document.getElementById('role_id').value;
    


    const user ={
        username: username,
        password: password,
        first_name: fName,
        last_name: lName,
        role_id: role_id,
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

}