const BASE_API_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_API_URL}/reimburse`;

window.onload = getReimbursements;


function getReimbursements(){
    
    const resolver_id = localStorage.getItem('currentUser');


    fetch (`${RESOURSE_URL + "?author_id=" + 0 + "&id=" + 0 + "&status=" + 1 + "&resolverID=" + 0 }`)
    .then(response => response.json())
    .then((data) => createReimbursementEle(data));
    
}



const content = document.getElementById("content");




function createReimbursementEle(reimbursementData){
    console.log(reimbursementData);
    reimbursementData.forEach((reimburse) => createReimbursement(reimburse)); 
}

function createReimbursement(reimburse){

    var formatted;

    if(reimburse.resolved = null){
        formatted = "Not Resolved"
    }else{
        var timestamp = reimburse.resolved;
        var date = new Date(timestamp);
    //      ToDo: come back if have time!!!!
        formatted = ("Time Resolved: "+date.getDate()+
        "/"+(date.getMonth()+1)+
        "/"+date.getFullYear()+
        " "+date.getHours()+
        ":"+date.getMinutes()+
        ":"+date.getSeconds());
    }


    var timestampSubmit = reimburse.submitted;
    var dateSub = new Date(timestampSubmit);

    var formattedSub = ("Time Submitted: "+dateSub.getDate()+
        "/"+(dateSub.getMonth()+1)+
        "/"+dateSub.getFullYear()+
        " "+dateSub.getHours()+
        ":"+dateSub.getMinutes()+
        ":"+dateSub.getSeconds());




    const reimbursementElement = document.createElement("div");
    reimbursementElement.setAttribute("class", "reimburse");

    const cont = document.createElement("p");
    cont.textContent="Id: " + reimburse.id;
    cont.id = "id";
    localStorage.setItem('id', reimburse.id)

    const author = document.createElement("p");
    author.textContent="Author: " + reimburse.authorID;

    const amount = document.createElement("p");
    amount.textContent="Amount: $" + reimburse.amount;
    amount.id = "amount";
    localStorage.setItem('amount', reimburse.amount);

    const submitted = document.createElement("p");
    submitted.textContent=formattedSub;

    const resolved = document.createElement("p");
    resolved.textContent=formatted;

    const description = document.createElement("p");
    description.textContent="Description: " +reimburse.description;

    const resolver = document.createElement("p");
    resolver.textContent="Resolver ID: " + reimburse.resolverID;

    // Creating Approve or deny by making an array list
    // var myParent = document.body;
    // var array = ["", "", "Approved","Deny"]
    // First 2 elements are blank because in data base Approve is 2 and Deny is 3 I did it this way because I would have to refactor everything else if i did not.

    // const status = document.createElement("select");
    // status.id = "mySelect";

    // for (var i = 2; i<array.length; i++) {
    //     var option = document.createElement("option");
    //     option.value = array[i];
    //     option.text = array[i];
    //     status.appendChild(option);
        
    // }

    // const status =document.createElement("select");
    // status.options = "Approve", "Deny";
    
        const approve = document.createElement("button");
        approve.textContent="Approve"
        approve.onclick= approve1;

        const deny = document.createElement("button");
        deny.textContent="Deny"
        deny.onclick= deny1;

    

    const type_id = document.createElement("p");
    type_id.textContent="Type id code: " + reimburse.reimbursement_type_id;

    

    content.appendChild(reimbursementElement);
    reimbursementElement.appendChild(cont);
    reimbursementElement.appendChild(author);
    reimbursementElement.appendChild(amount);
    reimbursementElement.appendChild(submitted);
    reimbursementElement.appendChild(resolved);
    reimbursementElement.appendChild(description);
    reimbursementElement.appendChild(resolver);
    reimbursementElement.appendChild(type_id);
    reimbursementElement.appendChild(approve);
    reimbursementElement.appendChild(deny);
    

}

function deny1() {
    

    const user ={
        amount: localStorage.getItem('amount'),
        paymentID : 1,
        resolverID: localStorage.getItem('currentUser'),
        status: 3,
        id: localStorage.getItem('id')
    };

    const userJSON = JSON.stringify(user);

   

    let response1 = fetch(RESOURSE_URL, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: userJSON,
        
    }).then(response1 => response1.json());

    if (response1.status== 204){
        alert("Denied")
        location.reload();
    }else{
        alert("Denied")
        location.reload();
    }
}


function approve1() {
    const user ={
        amount: localStorage.getItem('amount'),
        paymentID : 1,
        resolverID: localStorage.getItem('currentUser'),
        status: 2,
        id: localStorage.getItem('id')
    };

    const userJSON = JSON.stringify(user);

    

    let response = fetch(RESOURSE_URL, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: userJSON,
        
    }).then(response => response.json());

    if (response.status = 204){
        alert("Approved")
        location.reload();
    }else{
        alert(response.status)
    }
}
