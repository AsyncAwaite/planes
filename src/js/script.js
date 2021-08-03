
window.addEventListener('DOMContentLoaded', function() {


    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const header = document.querySelector('.header');
    const promo = document.querySelector('.promo');
    const body  = document.body;
    const promoHeight = promo.scrollHeight;
    let menuStatus = false;
    window.addEventListener('scroll', headerFixed);
    function headerFixed() {
        
        console.dir(promo)
        if (window.pageYOffset >= promoHeight  && menuStatus === false)
        {
            header.classList.add('header_fixed')
            menuStatus = true;
   
        } else if (window.pageYOffset < 200 && menuStatus === true){
            menuStatus = false;
            console.log('vbhvbhk');
            header.classList.remove('header_fixed')
        }
    };
  


    burger.addEventListener('click', (e) => {
        burger.classList.toggle('burger-opened');
        header.classList.toggle('active');
        body.classList.toggle('active');
      
    });
});
