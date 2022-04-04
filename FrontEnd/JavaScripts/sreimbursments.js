const BASE_API_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_API_URL}/auth`;

var x = localStorage.getItem('currentUser');

// 
const authorID = document.getElementById("currentUserID").innerHTML;
// document.getElementById("currentUsername").innerHTML = y;
const reimbursement_type_id = document.getElementById('reimbursement_type_id').value;
const amount = document.getElementById('amount').value;
const description = document.getElementById('description').value;

async function submit(){

    

    const user ={
        amount: amount,
        description: description,
        authorID: currentUser,
        status: 1,
        reimbursement_type_id: reimbursement_type_id, 
    };

    const userJSON = JSON.stringify(user);

    let response = await fetch(RESOURSE_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: userJSON,
        
    }).then(response => response.json());
    console.log(response);

    if (response.status== 204){
        alert("Submitted")
    }else{
        alert("Looks like something went wrong contact your local admin.")
    }
}