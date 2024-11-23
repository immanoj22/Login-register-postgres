$(".login").on("click",(e)=>{
    const regex = /\d/;
    const regex1=/^\d+$/;
    const specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
//username
    let username=document.myform.u_Username;
//name
    let name=document.myform.u_name;
//email
    let email=document.myform.ur_email;
    let stringparseemailvalue=String(email.value);
    let gmailvali=stringparseemailvalue.indexOf("@");
    gmailvali=stringparseemailvalue.slice(gmailvali,stringparseemailvalue.length);
//pass
    let pass=document.myform.ur_pass;
//confrim vali
    let confrimpass=document.myform.u_conpassword;

//validation
    let validateuser=validateusername(username,regex,specialChars);
    let validatename=checkname(name);
    let validateemail=checkemail(email,stringparseemailvalue,gmailvali);
    let password=checkpassword(pass,regex,regex1,specialChars);
    let confrimpassword=checkconfrimpass(pass);


    if(!(validateuser && validatename && validateemail && password && confrimpassword)){
        e.preventDefault();
    }
    
    
   
    function validateusername(username,regex,specialChars){
        if(username.value==''){
           
            $("#Usernamealert").text("This field cannot be empty")
            username.classList.add("is-invalid")
            return false;
            
        }
        else if(specialChars.test(username.value)){
    
            $("#Usernamealert").text("Symbols cannot be used in Username")
            username.classList.add("is-invalid")
            return false;
        }
        else if(username.value.length<=4){
           
            $("#Usernamealert").text("Username should be more than 4 character")
            username.classList.add("is-invalid")
            return false;
        }
        else if(regex.test(username.value) && username.value.length>6 && (!(specialChars.test(username.value)))){
            $("#Usernamealert").text("")
            username.classList.remove("is-invalid") 
            username.classList.add("is-valid") 
            return true;
        }
        else if((!regex.test(username.value)) && username.value.length>6 ){
           
            $("#Usernamealert").text("Username must contain atleast 1 number")
            username.classList.add("is-invalid")
            return false;
        }
    }

    //name

    function checkname(name){
        if(name.value==''){

          $("#ur_name").text("This field cannot be empty")
          name.classList.add("is-invalid")
          return false;
        }
        else{
          $("#ur_name").text("")
          name.classList.add("is-valid")
          name.classList.remove("is-invalid")
          return true;
        }   
    }
  //email   
    function checkemail(email,stringparseemailvalue,gmailvali){
        if(email.value==''){           
            email.classList.add("is-invalid");
            $("#emailalert").text("This field cannot be empty")    
            return false;    
         }
         else if(stringparseemailvalue=="@" || gmailvali=="@" || stringparseemailvalue=="@gmail.com" || gmailvali!="@gmail.com" ){
            email.classList.add("is-invalid");
            $("#emailalert").text("Invalid email")
            return false;
         }
         else {
            email.classList.remove("is-invalid")
            email.classList.add("is-valid")
            $("#emailalert").text("")
            return true;
         }

    }

    

//password validation  
         function checkpassword(pass,regex,regex1,specialChars){
            if(pass.value==''){   
               
                pass.classList.add("is-invalid");
                $("#passalert").text("This field cannot be empty") 
                return false;                 
            }
            else if(regex1.test(pass.value)){
               
                pass.classList.add("is-invalid");
                $("#passalert").text("Password should contain at least 1 character") 
                return false;
            }
            else if(pass.value.length<7){
                
                pass.classList.add("is-invalid");
                $("#passalert").text("Password should be greater than 6 character") 
                return false;  
            }
            else if(regex.test(pass.value) && pass.value.length>7 && ((specialChars.test(pass.value)))){
                $("#passalert").text("")
                pass.classList.remove("is-invalid") 
                pass.classList.add("is-valid") 
                return true;
            }
            else if((!specialChars.test(pass.value)) && pass.value.length>7){
               
                pass.classList.add("is-invalid");
                $("#passalert").text("Password should contain at least 1 symbol")
                return false
            }
            else if((!regex.test(pass.value))&& pass.value.length>7 ){
               
                pass.classList.add("is-invalid");
                $("#passalert").text("Password should contain at least 1 number")
                return false;
            }

         }
        
//confrim pass

       function checkconfrimpass(pass){
        if(confrimpass.value==''){   
           
            confrimpass.classList.add("is-invalid");
            $("#confpassalert").text("This field cannot be empty") 
            return false;                 
        }
        else if(confrimpass.value==pass.value){
            $("#confpassalert").text("")
            confrimpass.classList.remove("is-invalid") 
            confrimpass.classList.add("is-valid")
            return true;
        }
        else{
            
            confrimpass.classList.add("is-invalid");
            $("#confpassalert").text("Password mismatch ")
            return false;
        }

       }  

})




