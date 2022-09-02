/*
console.log(document.querySelector('.items'));
            document.querySelector('#item').style.background = 'red' 
    console.log('this is very Good')
const items = document.querySelectorAll('.items')
items.forEach((item) => console.log(item))
*/
//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello'
//ul.children[1].innerText = 'Hi';
//ul.lastElementChild.innerHTML = 'Someone'
//const btn = document.querySelector('.btn');
//btn.style.background = 'yellowgreen'

/*const btn = document.querySelector('.btn');

btn.addEventListener('click',(o) => {
    o.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('body');
})
*/









const myForm = document.querySelector('my-form');
const user = document.querySelector('#Uname');
const UEmail = document.querySelector('#Uemail');
const logBtn = document.querySelector('.btn');
user.value == '';

logBtn.addEventListener('click', (o) =>{
   o.preventDefault();
  

 var random = Math.floor(Math.random() * 200)
 console.log(Number.isInteger(123));
 if (user.value == '' || UEmail.value==''  || typeof(user.value) === 'integer' )
   {
       alert('Please enter all fields')
   }
   
   
else if (user.value.length  == 4 && UEmail.value ==  '3d4ojdsd' ){
   window.location.href= "QandA.htm"
}
else if (user.value.length  == 5 && UEmail.value == 'll6nsdksd' ){
   window.location.href= "QandA.htm"
}
else if (user.value.length  == 6 && UEmail.value == 'usjk7j7kj' ){
   window.location.href= "QandA.htm"
}
else if (user.value.length  == 7 && UEmail.value == 'ghyut789d76' ){
   window.location.href= "QandA.htm"
}
else if (user.value.length  == 8 && UEmail.value == 'dd1dhksdd0f' ){
   window.location.href= "QandA.htm"
}
else if (user.value.length  == 9 && UEmail.value == 's1kjsdjlsd2df' ){
   window.location.href= "QandA.htm"
}
else if (user.value.length  == 10 && UEmail.value == 'sdfjsd3dsf2q' ){
   window.location.href= "QandA.htm"
}
else{
   alert('Username or Password is incorrect.')
}
 user.value === '';
})




































