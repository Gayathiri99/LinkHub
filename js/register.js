const form = document.getElementById("registerForm");

form.addEventListener("submit",function(e){

e.preventDefault();

document.querySelectorAll(".error").forEach(error=>error.innerHTML="");

const name=document.getElementById("name").value.trim();

const age=document.getElementById("age").value.trim();

const phone=document.getElementById("phone").value.trim();

const password=document.getElementById("password").value;

let valid=true;

// Name

if(!/^[A-Za-z ]{3,}$/.test(name)){

document.getElementById("nameError").innerHTML="Enter a valid name.";

valid=false;

}

// Age

if(age<18||age>100){

document.getElementById("ageError").innerHTML="Age must be between 18 and 100.";

valid=false;

}

// Phone

if(!/^[6-9]\d{9}$/.test(phone)){

document.getElementById("phoneError").innerHTML="Enter a valid 10-digit mobile number.";

valid=false;

}

// Password

const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(!passwordRegex.test(password)){

document.getElementById("passwordError").innerHTML="Password must contain uppercase, lowercase, number, special character and minimum 8 characters.";

valid=false;

}

if(!valid) return;

let users=JSON.parse(localStorage.getItem("users"))||[];

// Duplicate Phone Check

const exists=users.some(user=>user.phone===phone);

if(exists){

alert("Phone number already registered.");

return;

}

const user={

id:Date.now(),

name,

age,

phone,

password

};

users.push(user);

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful!");

window.location.href="login.html";

});