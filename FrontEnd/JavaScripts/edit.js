const BASE_API_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_API_URL}/reimburse`;

window.onload = getReimbursements;


function getReimbursements(){
    
    const author_id = localStorage.getItem('currentUser');


    fetch (`${RESOURSE_URL + "?author_id=" + author_id + "&id=" + 0 + "&status=" + 1 + "&resolverID=" + 0 }`)
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
        
         var timestamp = reimburse.resolved;
        var date = new Date(timestamp);
    //      ToDo: come back if have time!!!!
        formatted = ("Time Resolved: "+date.getDate()+
        "/"+(date.getMonth()+1)+
        "/"+date.getFullYear()+
        " "+date.getHours()+
        ":"+date.getMinutes()+
        ":"+date.getSeconds());
    }else{
       formatted = "Not Resolved"
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

    const amountText = document.createElement("span");
    amountText.textContent="Amount $";
    const amount = document.createElement("span");
    amount.textContent=reimburse.amount;
    const amountE = document.createElement("input");
    

    const submitted = document.createElement("p");
    submitted.textContent=formattedSub;

    const resolved = document.createElement("p");
    resolved.textContent=formatted;

    const descriptionText = document.createElement("span");
    descriptionText.textContent="Description: " ;
    const description = document.createElement("span");
    description.textContent=reimburse.description;
    const descriptionE = document.createElement("input");
    // descriptionE.setAttribute("hidden", "true");

    const resolver = document.createElement("p");
    resolver.textContent="Resolver ID: " + reimburse.resolverID;

    const status = document.createElement("p");
    status.textContent="Status code: " + reimburse.status;

    const type_id = document.createElement("p");
    type_id.textContent="Type id code: " + reimburse.reimbursement_type_id;

    const submit = document.createElement("button");
        submit.textContent="Submit"
        submit.onclick= function(){submit1(reimburse.id, reimburse.amount, reimburse.description)};
        // submit.setAttribute("hidden", "true");

    content.appendChild(reimbursementElement);
    reimbursementElement.appendChild(cont);
    reimbursementElement.appendChild(amountText);
    reimbursementElement.appendChild(amount);
    reimbursementElement.appendChild(amountE);
    reimbursementElement.appendChild(submitted);
    reimbursementElement.appendChild(resolved);
    reimbursementElement.appendChild(descriptionText);
    reimbursementElement.appendChild(description);
    reimbursementElement.appendChild(descriptionE);
    reimbursementElement.appendChild(resolver);
    reimbursementElement.appendChild(status);
    reimbursementElement.appendChild(type_id);
    reimbursementElement.appendChild(submit);

}

// function edit(element){
//     const amount = element.children[2]
//     const amountE = element.children[3];

//     const description = element.children[7];
//     const descriptionE = element.children[8];

//     const submit = element.children[12];

//     if(isHidden(amount && description)){
//         amount.removeAttribute("hidden");
//         description.removeAttribute("hidden");
//         amountE.setAttribute("hidden", true);
//         descriptionE.setAttribute("hidden", true);
//         submit.setAttribute("hidden", true);
//     } else {
//         amount.setAttribute("hidden","true");
//         amountE.removeAttribute("hidden");
//         description.setAttribute("hidden","true");
//         descriptionE.removeAttribute("hidden");
//         submit.removeAttribute("hidden");
//     }
//     function isHidden(element){
//         return element.hasAttribute("hidden");
//     }
// }

function submit1(id, amount, description) {
    
    
    const user ={
        amount: amount,
        description: description,
        id: id
    };

    const userJSON = JSON.stringify(user);

   

    let response = fetch(RESOURSE_URL, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: userJSON,
        
    }).then(response => response.json());

    if (response.status== 204){
        alert("Changed!")
        location.reload();
    }else{
        alert("Changed")
        location.href="./employe.html";
    }
}