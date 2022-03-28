function radio(){
     
    if (document.getElementById("Employee").checked == true){
        document.getElementById("Employee").value =1;
        document.getElementById("FinanceManager").value =0;
    } else {
        document.getElementById("Employee").value =0;
        document.getElementById("FinanceManager").value =1;
    }
}