

$(".login").on("click",(e)=>{
   
    const regex = /\d/;
    const regex1=/^\d+$/;
    const specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
//email validation-vali
        let email=document.myform.ur_email;
        let stringparseemailvalue=String(email.value);
        let gmailvali=stringparseemailvalue.indexOf("@");
        gmailvali=stringparseemailvalue.slice(gmailvali,stringparseemailvalue.length);
        
        if(email.value==''){   
            e.preventDefault()
            email.classList.add("is-invalid");
            $("#emailalert").text("This field cannot be empty")
                   
        }
        else if(stringparseemailvalue=="@" || gmailvali=="@" || stringparseemailvalue=="@gmail.com" || gmailvali!="@gmail.com" ){
            e.preventDefault()
            email.classList.add("is-invalid");
            $("#emailalert").text("Invalid email")
        }
        else {
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
            $("#emailalert").text("")
        }
//password validation
    let pass=document.myform.ur_pass;
//confrim vali
   let confrimpass=document.myform.u_conpassword;   
   let pas=pass.value;
   
    if(pass.value!=confrimpass.value){
        e.preventDefault();
        pass.classList.add("is-invalid")
        confrimpass.classList.add("is-invalid");
        $("#confpassalert2").text("Password mismatch ")
    }
    

    if(confrimpass.value=='' || pass.value==''){  
        e.preventDefault();  
        pass.classList.add("is-invalid") 
        confrimpass.classList.add("is-invalid");
        $("#confpassalert2").text("This field cannot be empty")
        $("#passalert").text("This field cannot be empty")            
    }
    else if( pass.value===confrimpass.value  && specialChars.test(pass.value) && pass.value.length>7 && specialChars.test(confrimpass.value) && confrimpass.value.length>7){
         
        $("#passalert").text("")
        pass.classList.remove("is-invalid") 
        pass.classList.add("is-valid")
        confrimpass.classList.remove("is-invalid");
        confrimpass.classList.add("is-valid");
        $("#confpassalert2").text("")
        
        
    }
    else if(regex1.test(pass.value)){
        e.preventDefault();    
        pass.classList.add("is-invalid");
        $("#passalert").text("Password should contain at least 1 character") 
        
    }
    else if(pass.value.length<7){
        e.preventDefault();  
        pass.classList.add("is-invalid");
        $("#passalert").text("Password should be greater than 6 character") 
        
    }
    else if((!specialChars.test(pass.value)) && pass.value.length>7){
        e.preventDefault();  
        pass.classList.add("is-invalid");
        $("#passalert").text("Password should contain at least 1 symbol")
        return false
    }
    else if((!regex.test(pass.value))&& pass.value.length>7 ){
       
        pass.classList.add("is-invalid");
        $("#passalert").text("Password should contain at least 1 number")
        
    }
    

        
   
})


