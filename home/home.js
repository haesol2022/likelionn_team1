document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.coupon-slider');
    const coupons = document.querySelectorAll('.coupon');
    const totalCoupons = coupons.length;
    const slideWidth = 110 / 3;

    let currentIndex = 0;

    const firstCouponClone = coupons[0].cloneNode(true);
    const lastCouponClone = coupons[totalCoupons - 1].cloneNode(true);


    slider.appendChild(firstCouponClone);
    slider.insertBefore(lastCouponClone, coupons[0]);

    
    slider.style.transform = `translateX(0%)`; 

    function showNextCoupon() {
        currentIndex++;
        slider.style.transition = 'transform 0.5s ease-in-out';

       
        let moveDistance = 0;
        if (currentIndex === 1) {
            moveDistance = (currentIndex + 1) * slideWidth;
        } else if (currentIndex === 2) {
            moveDistance = (currentIndex + 1) * slideWidth + 18;
        } else {
            moveDistance = (currentIndex + 1) * slideWidth;
        }

       
        slider.style.transform = `translateX(-${moveDistance}%)`;

     
        if (currentIndex === totalCoupons) {
            setTimeout(() => {
                currentIndex = 0;
                slider.style.transition = 'none';
                slider.style.transform = `translateX(0%)`;
               
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        slider.style.transition = 'transform 0.5s ease-in-out';
                    });
                });
            }, 500);
        }
    }

    setInterval(showNextCoupon, 3000);
});
