window.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu')
    const header = document.querySelector('.header')
    const promo = document.querySelector('.promo');
    const headerHeight = header.offsetHeight;
    const promoHeight = promo.offsetTop;
    window.addEventListener('scroll', headerFixed);
    function headerFixed() {
        if (window.pageYOffset >= promoHeight)
        {
            header.classList.add('header_fixed');
            promo.style.marginTop = `${headerHeight}px`;
        } else {
            header.classList.remove('header_fixed');
            promo.style.marginTop = null;
        }
        }
        // let scrollDistance = window.scrollY;
        // if (scrollDistance >= promoHeight) {
        //     header.classList.add('header_fixed')
        //
        // } else if (scrollDistance === 200) {
        //     console.log('yes');
        //     console.log(scrollDistance);
            // header.classList.remove('header_fixed');




    burger.addEventListener('click', (e) => {
        burger.classList.toggle('burger-opened');
        header.classList.toggle('active');
    });
});
