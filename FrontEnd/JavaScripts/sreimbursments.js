function radio_s(){
    if (document.getElementById("lodging").checked == true){
        document.getElementById("lodging").value =1;
        document.getElementById("food").value =0;
        document.getElementById("travel").value =0;
        document.getElementById("other").value =0;
    } else if(document.getElementById("travel").checked == true) {
        document.getElementById("lodging").value =0;
        document.getElementById("travel").value =1;
        document.getElementById("food").value =0;
        document.getElementById("other").value =0;
    } else if(document.getElementById("food").checked == true){
        document.getElementById("lodging").value =0;
        document.getElementById("travel").value =0;
        document.getElementById("food").value =1;
        document.getElementById("other").value =0;
    } else {
        document.getElementById("lodging").value =0;
        document.getElementById("travel").value =0;
        document.getElementById("food").value =0;
        document.getElementById("other").value =1;
    }
}