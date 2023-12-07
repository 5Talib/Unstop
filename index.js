// document.querySelector(".new").style.backgroundColor = "red";
document.querySelector(".firstbtn").addEventListener("click",function(){
    // document.querySelector(".new").style.display = "block";
    const node=document.querySelector(".new");
    const clone=node.cloneNode(true);
    // document.body.appendChild(clone);
    // node.parentNode.appendChild(clone);
    clone.style.display = "block";
    const certainClassElement = document.querySelector('.firstbtn');
    node.parentNode.insertBefore(clone,certainClassElement);
    clone.addEventListener("click",function(){
        this.style.display="none";
    });
    // startover();
});
// document.querySelector(".addbtn").addEventListener("click",function(){
//     document.querySelector(".new").style.display="none";
// });

// function startover(){
//     document.querySelector("firstbtn").disabled=true;
// }