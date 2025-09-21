 document.addEventListener('DOMContentLoaded', function() {
    const swiper1 = document.querySelector('.swiper1');
    
    if (swiper1) {
        swiper1.addEventListener('click', function(event) {

            const button = event.target.closest('.swiper__link');
            const close = event.target.closest('.swiper__close');
            

            if (button || close) {          
               
                
                if(button){
                    const card = button.closest('.swiper__card');
                    const slide = button.closest('.swiper1-slide')
                    const cardInfo = slide.querySelector('.swiper__card-info')
                    if (card) {
                        card.classList.add('swiper__card-hidden');
                        cardInfo.classList.remove('swiper__card-hidden')
                    } else {
                        return
                    }
                }

                if(close){
                    const cardInfo = close.closest('.swiper__card-info')
                    const slide = close.closest('.swiper1-slide')
                    const card = slide.querySelector('.swiper__card');
                    if (cardInfo) {
                        cardInfo.classList.add('swiper__card-hidden');
                        card.classList.remove('swiper__card-hidden')
                    } else {
                        return
                    }
                }
                
            }

            
        });
        
    } else {
       return
    }

    
});



    