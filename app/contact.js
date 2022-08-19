/* let myFunc=(first,last, ...rest)=>{
    console.log(first);
    console.log(last);
    console.log(rest);
}

myFunc("nir","mor","dor","eli",33);
 */
let arrows=[];
let myForm= document.getElementById("my-Form");
let myErr= document.getElementById("err");


myForm.addEventListener("submit", (evn)=>{

    myErr.innerHTML="";
    
    let {fName,lName,eMail,password}=myForm.elements;
    let tempName = fName.value.trim();
    if(tempName.length<2)
    {
        let msg ="worng name!";
        arrows.push(msg);
        evn.preventDefault();

    }
      tempName = lName.value.trim();
     if(tempName.length<2)
    {
        let msg ="worng last name!";
        arrows.push(msg);
        evn.preventDefault();
    }

     if(!eMail.value.includes('@'))
    {
        let msg ="worng email!";
        arrows.push(msg);
        evn.preventDefault();
    }

     if(password.value<2)
    {
        let msg ="worng password!";
        arrows.push(msg);
        evn.preventDefault();
    }

    if(arrows.length>0){
        arrows.forEach((err)=>{
        myErr.innerHTML+= `
        <div>
        you got error ${err}
        </div>`
       
        })
        
    }


})

