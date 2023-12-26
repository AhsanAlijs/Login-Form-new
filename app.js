const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');

registerlink.addEventListener('click' , () =>{
    wrapper.classList.add('active');
})
loginlink.addEventListener('click' , () =>{
    wrapper.classList.remove('active');
})