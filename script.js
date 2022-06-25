// sign up script starts
var allStudents = []
function add(){
    if(localStorage.localPerson){
        // allStudents = JSON.parse(localStorage.localPerson)
        allStudents = JSON.parse(localStorage.localPerson)
        // localStorage.setItem("localPerson",JSON.stringify(allStudents))
    }
}
function reg(){
    var a = firstNam.value
    firstNam.value = ""
    var b = lastNam.value
    lastNam.value = ""
    var c = eMail.value
    eMail.value = ""
    var d = ag.value
    ag.value = ""
    var e = passWord.value
    passWord.value = ""
    
    
   var person = {
        firstname:a,
        lastname:b,
        eMail:c,
        age:d,
        passWord:e,
    }

            if(person.firstname == '' || person.lastname == "" ||person.eMail == "" || person.age =="" || person.passWord ==""){
                alert('sorry fill in your data')
                return false
            }
    else{
      allStudents.push(person)
      
            alert(`SUCCESS,${person.firstname} You've successfully Signed Up On the School portal.`)
            window.location.href = "sign_in.html"
    }
     localStorage.localPerson = JSON.stringify(allStudents)
    //  localStorage.setItem("localPerson",JSON.stringify(allStudents))

  

}
// sign up scripts ends
// sign in  script starts
function see(){ 
    uEmail = email.value
    uPassword = password.value
    stud =JSON.parse(localStorage.getItem("localPerson"))

    for (let i = 0; i < stud.length; i++) {
        //  console.log(stud[1]);
         if(uEmail == stud[i].eMail && uPassword == stud[i].passWord){
            alert('Login in sucessful')
            window.location.href = "board.html"   
            return true 
         }else{
            window.location.href = "sign_in.html"
            re.innerHTML ="invalid   email and  password"
        }
    }
}
// sign in scripts ends
// dashboard scripts starts
function displayDashBoard(){   
    allStudents = JSON.parse(localStorage.localPerson)
  let table =`<table border="1" align="center"  class="table table-responsive bg-white table-bordered text-center text-success container">
   <tr><td colspan="6">SCHOOL PORTAL DATABASE</td></tr><tr><td>S/N</td><td>FIRSTNAME</td><td>LASTNAME</td><td>EMAIL</td><td>AGE</td><td>PASSWORD</td></tr><tbody>`  

   for (let i = 0; i < allStudents.length; i++) {
       table += "<tr>"
       table += `<td>${2200+i+"2022"+10+i}</td><td>${allStudents[i].firstname}<td>${allStudents[i].lastname}</td><td>${allStudents[i].eMail}</td><td>${allStudents[i].age}</td><td>${allStudents[i].passWord}</td>`
           table += "</tr>"
   
   }
   tab.innerHTML = table
}
// dashboard scripts ends