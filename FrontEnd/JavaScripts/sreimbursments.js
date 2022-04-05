const BASE_API_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_API_URL}/reimburse`;



// 
const authorID = localStorage.getItem('currentUser');
document.getElementById("currentUsername").innerHTML = authorID;
const reimbursement_type_id = document.getElementById('reimbursement_type_id').value;
const amount = document.getElementById('amount').value;
const description = document.getElementById('description').value;

async function submit(){

    

    const user ={
        amount: amount,
        description: description,
        authorID: authorID,
        status: 1,
        reimbursement_type_id: reimbursement_type_id, 
    };

    const userJSON = JSON.stringify(user);

    const response = await fetch(RESOURSE_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: userJSON,
        
    });

    if (response.status== 204){
        alert("Submitted")
        location.href = 'employe.html';
    }else{
        alert("Looks like something went wrong contact your local admin.")
    }
}