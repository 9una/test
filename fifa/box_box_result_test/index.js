$(function(){

    let stepOneValue;
    let stepTwoValue;

    const list = document.querySelectorAll('.step_1 li');
    const subList = document.querySelectorAll('.step_2 li');
    //step1 > step2
    for(i = 0; i < list.length; i++){
        const btn = list[i].querySelector('button');
        
        btn.addEventListener('click', (e)=>{
            let j = 0;
            while(j < list.length){
                list[j++].classList.remove('active');
            }
            btn.parentElement.classList.add('active');
            //console.log(e.target.getAttribute("data-category"));
            //console.log(e.target.dataset.category);

            if(e.target.getAttribute('data-category') == '건강'){
                $('.step_2').attr('class', 'step step_2 cate01 active');
            }
            if(e.target.getAttribute('data-category') == '뷰티'){
                $('.step_2').attr('class', 'step step_2 cate02 active');
            }
            if(e.target.getAttribute('data-category') == '주식'){
                $('.step_2').attr('class', 'step step_2 cate03 active');
            }
            if(e.target.getAttribute('data-category') == '교육'){
                $('.step_2').attr('class', 'step step_2 cate04 active');
            }
            if(e.target.getAttribute('data-category') == '렌트/리스'){
                $('.step_2').attr('class', 'step step_2 cate05 active');
            }
            if(e.target.getAttribute('data-category') == '병의원'){
                $('.step_2').attr('class', 'step step_2 cate06 active');
            }
            if(e.target.getAttribute('data-category') == '번역'){
                $('.step_2').attr('class', 'step step_2 cate07 active');
            }
                
            stepOneValue = e.target.dataset.category;
        })
    }
    
    //step2 > btn
    for(k = 0; k < subList.length; k++){
        const btn = subList[k].querySelector('button');

        btn.addEventListener('click', (e)=>{
            let j = 0;
            while(j < subList.length){
                subList[j++].classList.remove('active');
            }
            btn.parentElement.classList.add('active');
            
            stepTwoValue = e.target.dataset.sub;
            

            if($('.btn_card_put').hasClass('disabled')){
                $('.btn_card_put').removeClass('disabled')
            }
            
        });
    }

    //btn > result
    const result = document.querySelector('.result_box');
    $('.btn_card_put').on('click', function(){
        result.innerHTML = `${stepOneValue}<br>↓<br>${stepTwoValue}`;
    })

    ////왜ㅐ애ㅐㅐ 순서만나아ㅏ
});
