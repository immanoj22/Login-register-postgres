

$(".login").on("click",(e)=>{
    const regex = /\d/;
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
        let stringparsepassvalue=String(pass.value); 
        
        if(pass.value==''){   
            e.preventDefault()
            pass.classList.add("is-invalid");
            $("#passalert").text("This field cannot be empty")                  
        }
        else if(stringparsepassvalue.length<7){
            e.preventDefault()
            pass.classList.add("is-invalid");
            $("#passalert").text("Password should be greater than 6 character")   
        }
        else if(stringparsepassvalue.length<=7){
            pass.classList.remove("is-invalid")
            pass.classList.add("is-valid")
            $("#passalert").text("")
        }
        

    


// Check if string contians numbers



        
    
        
   
})


