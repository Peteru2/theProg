
const myform = document.querySelector('#my-form');
const msg = document.querySelector('#msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');
const Uname = document.querySelector('#Uname');
const Uemail = document.querySelector('#Uemail');
const umg = document.querySelector('#umsg');
const gend = document.form.gender;

const btn = document.querySelector('#btn');
const ubtn = document.querySelector('.btn');

btn.addEventListener('click',(o)=>{
   var random = Math.floor(Math.random() * 20);
   o.preventDefault();
   if (!emailInput.value  === !'' || !nameInput.value  === !''|| !gend.value===!'' ){      
      msg.style.display = 'block';
      userList.style.visibility = 'hidden';  
}
   
     if (emailInput.value  === '' || gend.value === '' || nameInput.value  === ''  ){msg.innerHTML = 'Please enter all fields';
        msg.classList.add('error')
        setTimeout(() => msg.style.display = 'none', 3000)
}

 else if( nameInput.value.length == 4 ){
    const li = document.createElement('li'); 
    li.appendChild(document.createTextNode(`  The User ${nameInput.value} account has been created, so proceed to login. Your password is  3d4ojdsd`) );
    userList.appendChild(li);
    userList.style.visibility = 'visible'; 
    userList.appendChild(li).classList.add('user');
    setTimeout(() => userList.appendChild(li).remove(), 9000);
    nameInput.value = '';
    emailInput.value = ''; 
 }
 else if( nameInput.value.length == 5){
   const li = document.createElement('li'); 
   li.appendChild(document.createTextNode(`  The User ${nameInput.value} account has been created, so proceed to login. Your password is ll6nsdksd`) );
   userList.appendChild(li);
   userList.style.visibility = 'visible'; 
   userList.appendChild(li).classList.add('user');
   setTimeout(() => userList.appendChild(li).remove(), 9000);
   nameInput.value = '';
   emailInput.value = ''; 

}
 else if( nameInput.value.length == 6){
    const li = document.createElement('li'); 
    li.appendChild(document.createTextNode(`  The User ${nameInput.value} account has been created, so proceed to login. Your password is usjk7j7kj`) );
    userList.appendChild(li);
    userList.style.visibility = 'visible'; 
    userList.appendChild(li).classList.add('user');
    setTimeout(() => userList.appendChild(li).remove(), 9000);
    nameInput.value = '';
    emailInput.value = ''; 

 }
 else if( nameInput.value.length == 7){
    const li = document.createElement('li'); 
    li.appendChild(document.createTextNode(`  The User ${nameInput.value} account has been created, so proceed to login. Your password is ghyut789d76`) );
    userList.appendChild(li);
    userList.style.visibility = 'visible'; 
    userList.appendChild(li).classList.add('user');
    setTimeout(() => userList.appendChild(li).remove(), 9000);
    nameInput.value = '';
    emailInput.value = ''; 

 }
 else if( nameInput.value.length == 8){
   const li = document.createElement('li'); 
   li.appendChild(document.createTextNode(`  The User ${nameInput.value} account has been created, so proceed to login. Your password is dd1dhksdd0f`) );
   userList.appendChild(li);
   userList.style.visibility = 'visible'; 
   userList.appendChild(li).classList.add('user');
   setTimeout(() => userList.appendChild(li).remove(), 9000);
   nameInput.value = '';
   emailInput.value = ''; 

}
else if( nameInput.value.length == 9){
   const li = document.createElement('li'); 
   li.appendChild(document.createTextNode(`  The User ${nameInput.value} account has been created, so proceed to login. Your password is s1kjsdjlsd2df`) );
   userList.appendChild(li);
   userList.style.visibility = 'visible'; 
   userList.appendChild(li).classList.add('user');
   setTimeout(() => userList.appendChild(li).remove(), 9000);
   nameInput.value = '';
   emailInput.value = ''; 

}
else if( nameInput.value.length == 10){
   const li = document.createElement('li'); 
   li.appendChild(document.createTextNode(`  The User ${nameInput.value} account has been created, so proceed to login. Your password is sdfjsd3dsf2q`) );
   userList.appendChild(li);
   userList.style.visibility = 'visible'; 
   userList.appendChild(li).classList.add('user');
   setTimeout(() => userList.appendChild(li).remove(), 9000);
   nameInput.value = '';
   emailInput.value = ''; 

}
else{
   msg.innerHTML = 'Username too short/long or the form is not completely filled';
   msg.classList.add('error')
 setTimeout(() => msg.style.display = 'none', 3000)
 
 msg.style.display = 'block';
} 

})

//Login

