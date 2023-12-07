document.querySelector(".check1").addEventListener("change",function(){
    if(document.querySelector(".check1").checked){
        // document.querySelectorAll(".new1").style.display="flex";
        for(var i=0;i<document.querySelectorAll(".new1").length;i++){
            document.querySelectorAll(".new1")[i].style.display="flex";
        }
    }
    else{
        // document.querySelectorAll(".new1").style.display="none";
        for(var i=0;i<document.querySelectorAll(".new1").length;i++){
            document.querySelectorAll(".new1")[i].style.display="none";
        }
    }
});
document.querySelector(".check2").addEventListener("change",function(){
    if(document.querySelector(".check2").checked){
        document.querySelector(".new2").style.display="flex";
    }
    else{
        document.querySelector(".new2").style.display="none";
    }
});