const counter=document.getElementById('counter');
let count=0
let counterbtn=document.getElementById('counterbtn');
counterbtn.addEventListener('click',()=>{
    counter.innerText=++count;
})
let textarea=document.getElementById('textarea');
let wordcount=document.getElementById('wordcount');
textarea.addEventListener("input", ()=>{
    wordcount.innerText=textarea.value.length+"  " + textarea.value;
   
});

var btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    if (btn.innerText == "Click Me") {
      btn.innerText = "Clicked!";
    } else {
      btn.innerText = "Click Me";
    }
  });

let mouse=document.getElementById('mouse');
  window.addEventListener("mouseover", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    mouse.innerText = `x=${x},y=${y}`;
  });


var display = document.querySelector("#display");
let myPromise = new Promise(function(myResolve, myReject) {
    fetch('https://fakestoreapi.com/products/').then(res=>res.json()).then(data=>{
        myResolve(data); 
    }).catch(err=>{
        myReject(err);
    })
    });
    myPromise.then((data)=>{
        data.map((item)=>{
            let img=document.createElement("img");
            img.src=item.image;
            display.appendChild(img);
        })
    }).catch(err=>{console.log(err)})

 let register = document.querySelector("#register");
 let registerform = document.querySelector("#registerform");
 let loginform = document.querySelector("#loginform");
 let login = document.querySelector("#login");
 let unamer=document.querySelector("#unamer");
 let passr=document.querySelector("#passr");
 

 let arr=[]
 function pushh(username, password){
    let obj={username,password}
    arr.push(obj);
 }
 
 register.addEventListener("click",(e)=>{
    e.preventDefault();
    pushh(unamer.value,passr.value)
    registerform.style.display="none";
    loginform.style.display="block"
    console.log(arr)
 })

 login.addEventListener("click",(e)=>{
    e.preventDefault();
    let unamel=document.querySelector("#unamel");
    let passl=document.querySelector("#passl");
    

    arr.map((item)=>{
        console.log(item.username,unamel.value)
        if(item['username']===unamel.value && item['password']===passl){
            console.log("correct ")
        }   
        else{
            alert("wrong")
        }
    })
 })

 let logout=document.querySelector("#logout");
 logout.addEventListener("click",(e)=>{
    registerform.style.display="block"
    loginform.style.display="none"
 })



 let usersData = [
    { id: 1, name: "Ganesh", email: "Ganesh@gmail.com" },
];

const userForm = document.getElementById("popup");
const userFormBg = document.getElementById("popupbg");
const addUserBtn = document.getElementById("add-user-btn");
const userNameInput = document.getElementById("user-name");
const userEmailInput = document.getElementById("user-email");
const submitBtn = document.getElementById("submit-button");

addUserBtn.addEventListener("click", () => {
    openUserForm();
    userNameInput.value = "";
    userEmailInput.value = "";
});

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = userNameInput.value;
    const email = userEmailInput.value;

    if (submitBtn.innerText === "Add/Update User") {
        addUser(name, email);
    } else {
        updateUser(submitBtn.dataset.userId, name, email);
    }

    closeUserForm();
});

function displayUserList() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";

    usersData.forEach((user) => {
        const userItem = document.createElement("div");
        userItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
        `;
        userList.appendChild(userItem);
    });
}

function addUser(name, email) {
    const id = usersData.length + 1;
    const user = { id, name, email };
    usersData.push(user);
    displayUserList();
}

function editUser(id) {
    const user = usersData.find((u) => u.id === id);
    if (user) {
        userNameInput.value = user.name;
        userEmailInput.value = user.email;
        submitBtn.innerText = "Update User";
        submitBtn.dataset.userId = user.id;
        openUserForm();
    }
}

function updateUser(id, name, email) {
    const userIndex = usersData.findIndex((u) => u.id == id);
    if (userIndex !== -1) {
        usersData[userIndex].name = name;
        usersData[userIndex].email = email;
        displayUserList();
        resetUserForm();
    }
}

function deleteUser(id) {
    const userIndex = usersData.findIndex((u) => u.id === id);
    if (userIndex !== -1) {
        usersData.splice(userIndex, 1);
        displayUserList();
    }
}

function openUserForm() {
    userForm.style.display = "block";
    userFormBg.style.display = "block";
}

function closeUserForm() {
    resetUserForm();
    userForm.style.display = "none";
    userFormBg.style.display = "none";
}

function resetUserForm() {
    userNameInput.value = "";
    userEmailInput.value = "";
    submitBtn.innerText = "Add/Update User";
    submitBtn.dataset.userId = "";
}

displayUserList();

