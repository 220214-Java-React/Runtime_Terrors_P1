
const BASE_API_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_API_URL}/reimburse`;

window.onload = getReimbursements;


function getReimbursements(){
    
    const resolver_id = localStorage.getItem('currentUser');
    console.log(resolver_id);


    fetch (`${RESOURSE_URL + "?author_id=" + 0 + "&id=" + 0 + "&status=" + 0 + "&resolverID=" + localStorage.getItem('currentUser') }`)
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
    // reimbursementElement.setAttribute("onclick", "edit(this)")

    const cont = document.createElement("p");
    cont.textContent="Id: " + reimburse.id;

    const amount = document.createElement("p");
    amount.textContent="Amount: $" + reimburse.amount;

    const submitted = document.createElement("p");
    submitted.textContent=formattedSub;

    const resolved = document.createElement("p");
    resolved.textContent=formatted;

    const description = document.createElement("p");
    description.textContent="Description: " +reimburse.description;

    const resolver = document.createElement("p");
    resolver.textContent="Resolver ID: " + reimburse.resolverID;

    const status = document.createElement("p");
    status.textContent="Status code: " + reimburse.status;

    const type_id = document.createElement("p");
    type_id.textContent="Type id code: " + reimburse.reimbursement_type_id;

    content.appendChild(reimbursementElement);
    reimbursementElement.appendChild(cont);
    reimbursementElement.appendChild(amount);
    reimbursementElement.appendChild(submitted);
    reimbursementElement.appendChild(resolved);
    reimbursementElement.appendChild(description);
    reimbursementElement.appendChild(resolver);
    reimbursementElement.appendChild(status);
    reimbursementElement.appendChild(type_id);

}

// function edit(element) {
//     const rid = element.children[0];
    
//     localStorage.setItem('current', reimburse.id);
//     console.log(localStorage.getItem('current'));
// }

