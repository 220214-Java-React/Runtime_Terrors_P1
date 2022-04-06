
const BASE_API_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_API_URL}/auth`;


async function login(){

    const username = document.getElementById('username').value;
    const password = document.getElementById('pwd').value;

    const user ={
        username: username,
        password: password
    }

    const userJSON = JSON.stringify(user);

    let response = await fetch(RESOURSE_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: userJSON,
        
    }).then(response => response.json());
    let user_role = response.roleID;

    
    
    localStorage.setItem('currentUser', response.id);
    if(user_role==1){
        location.href = 'HTML/finance.html';
    }else if(user_role == 2){
        location.href = 'HTML/employe.html';
    } else if(response.status == 401){
        alert("Something went wrong!")
        document.getElementById('username').value = "";
        document.getElementById('pwd').value = "";
    } 
}


