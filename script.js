const hamb=document.querySelector('.hamb');
const mobile_menu=document.querySelector('.navlist ul');
const header =document.querySelector('.headercontainer');

hamb.addEventListener('click',()=>{
      hamb.classList.toggle('active');
      mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
      var scrollpos=window.scrollY;
      if(scrollpos > 250){
            header.style.backgroundColor='#29323c';
      }
      else{
            header.style.backgroundColor='transparent';
      }
});
