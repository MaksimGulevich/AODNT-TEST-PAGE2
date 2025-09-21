 document.addEventListener('DOMContentLoaded', function() {
    const swiper1 = document.querySelector('.swiper1');
    
    if (swiper1) {
        swiper1.addEventListener('click', function(event) {

            const button = event.target.closest('.shedule__announcementslink');
            const close = event.target.closest('.shedule__announcementsclose');
            

            if (button || close) {          
               
                
                if(button){
                    const card = button.closest('.shedule__announcementscard');
                    const slide = button.closest('.swiper1-slide')
                    const cardInfo = slide.querySelector('.shedule__announcementscard-info')
                    if (card) {
                        card.classList.add('shedule__announcementscard-hidden');
                        cardInfo.classList.remove('shedule__announcementscard-hidden')
                    } else {
                        return
                    }
                }

                if(close){
                    const cardInfo = close.closest('.shedule__announcementscard-info')
                    const slide = close.closest('.swiper1-slide')
                    const card = slide.querySelector('.shedule__announcementscard');
                    if (cardInfo) {
                        cardInfo.classList.add('shedule__announcementscard-hidden');
                        card.classList.remove('shedule__announcementscard-hidden')
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



    