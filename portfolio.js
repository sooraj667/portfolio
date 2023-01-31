



function validate()
{
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var phno=document.getElementById("phone");
    var subject=document.getElementById("subject");






    var nameError=document.getElementById("name-error");
    var emailError=document.getElementById("email-error");
    var phnoError=document.getElementById("phno-error");
    var subjectError=document.getElementById("subject-error");


    var flag=0;

    if(email.value=="")
    { 
        emailError.innerHTML="Invalid - Email is blank!";
        flag=1;

    }
    else
    {
        emailError.innerhtml="";

    }
     if(name.value=="")
    {
        nameError.innerHTML="Invalid - Username is blank!";
        
        flag=1;
    }
    // else if(typeof(name.value="number"))
    // {
    //     nameError.innerHTML="Please enter a text";
    //     flag=1;

    // }
    else
    {
        nameError.innerHTML="";

    }

    if(phno.value=="")
    {
        phnoError.innerHTML="Invalid - Phone number is blank!";
        flag=1;

    }
    else if(typeof(phno.value)=="string")
    {
        phnoError.innerHTML="Invalid - Phone number cant be text";
        flag=1;
    }
    else{
        phnoError.innerHTML="";
       

    }
    if(subject.value=="")
    {
        subjectError.innerHTML="Invalid- Subject is blank!";
        flag=1;

    }
    else
    {
        subjectError.innerHTML=" ";
        

    }


    
    if(flag==1)
    return false;

    return true;
    

    
   
    
    



 
 
    
}




// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbyPwUjJY11x9ayX0KxyavH5Heb3a1KiKrL0y47XkuipXFyJBgROzd7B2xgk9A91s4-Z/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })