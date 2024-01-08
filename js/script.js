$(function(){
    today = new Date();          
    month = today.getMonth()+1;  

    /*
   クラス名sliderにスライドショーを適用
   s
   s
    */
    $('.slider').slick({ 
        fade: true,    
        speed: 1500,   
        autoplaySpeed: 3000,   
        arrows: false,         
        autoplay: true,        
        slidesToShow: 1,       
        infinite: true         
    })

    if(document.URL.match(/index03/)){                      
        const img = document.getElementById('flour-photo'); 
        //月によってidがflour-photoの表示する画像を変更
        if(month == 4 || month == 5 || month == 6 || month == 7 || month == 8  || month == 9 ){
            img.setAttribute('src','img/mukuge.jpg');
        }else{
            img.setAttribute('src','img/tubaki.jfif');
        }

        const title = document.getElementById('title');     
        //月によってidがtitleの表示内容を変更
        if(month == 1 || month == 2 || month == 3){         
            title.textContent = '松壽千年緑';
        }else if(month == 4 || month == 5 || month == 6){
            title.textContent = '薫風自南来';
        }else if(month == 7 || month == 8 || month == 9){
            title.textContent = '日々是好日';
        }else if(month == 10 || month == 11 || month == 12){
            title.textContent = '看々臘月尽';
        }  
    }
    if(document.URL.match(/index04/)){                          
        const title = document.getElementById('title');         
        const sub_title = document.getElementById('sub-title'); 
        //月によってtitlとsub_titleeの表示内容を変更
        if(month == 1 || month == 2 || month == 3){         
            title.textContent = '松壽千年緑';
            sub_title.textContent = '冬の緑をたたえる松に、永遠の生命力をみる';
        }else if(month == 4 || month == 5 || month == 6){
            title.textContent = '薫風自南来';
            sub_title.textContent = '風が吹いて、無駄なものがすっかりなくなったような境地';
        }else if(month == 7 || month == 8 || month == 9){
            title.textContent = '日々是好日';
            sub_title.textContent = 'この一瞬一瞬を大切にせよ';
        }else if(month == 10 || month == 11 || month == 12){
            title.textContent = '看々臘月尽';
            sub_title.textContent = 'よくよく一日一日を大切にしなさい';
        }     
    }
});