let selectClass= 0,
    selectPlayer = 0,
    selectGroup = 0;

$(function(){
    /* $('.step_1').find('button').on('click', function(e){
        $(this).addClass('active');
    }); */

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

            if(e.target.getAttribute('data-category') == '건강'){
                $('.step_2').attr('class', 'step step_2 cate01 active');
                dataValue();
            }
            if(e.target.getAttribute('data-category') == '뷰티'){
                $('.step_2').attr('class', 'step step_2 cate02 active');
                dataValue();
            }
            if(e.target.getAttribute('data-category') == '주식'){
                $('.step_2').attr('class', 'step step_2 cate03 active');
                dataValue();
            }
            if(e.target.getAttribute('data-category') == '교육'){
                $('.step_2').attr('class', 'step step_2 cate04 active');
                dataValue();
            }
            if(e.target.getAttribute('data-category') == '렌트/리스'){
                $('.step_2').attr('class', 'step step_2 cate05 active');
                dataValue();
            }
            if(e.target.getAttribute('data-category') == '병의원'){
                $('.step_2').attr('class', 'step step_2 cate06 active');
                dataValue();
            }
            if(e.target.getAttribute('data-category') == '번역'){
                $('.step_2').attr('class', 'step step_2 cate07 active');
                dataValue();
            }
            
            function dataValue(){
                stepOneValue = e.target.dataset.category;
            }
        })
    }
    
    //step2 > result
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
    const result = document.querySelector('.result_box');
    $('.btn_card_put').on('click', function(){
        result.innerHTML = `${stepOneValue}<br>↓<br>${stepTwoValue}`;
    })

    ///왜애애애애ㅐ 순서만 나와 !!
    
    // $('.step_1').find("button").on("click", function(e){
    //     var category = $(this).data("category");
    //     selectClass = category;
    //     $(".step_1").find("button").each(function(){
    //         $(this).parents("li").attr("category", "");

    //         if($(this).parent("li").hasClass('active')){
    //             $(this).parent("li").removeClass('active');
    //         }
    //         if($(this).data("category") == category){
    //             $(this).parents("li").addClass('active');
    //         } else {
    //             $(this).parents("li").addClass('disabled');
    //         }
    //     });

    //     if(category === 1){

    //     }
    // });

    /*
    optionInits();

    $('.step_01').find("button").on("click", function(e){
        if(!$('.step_04').hasClass(".animated")){

            var clazz = $(this).data("class");
            optionReset();
            selectClass = clazz;

            $(".step_01").find("button").each(function(){
                $(this).parents("dd").attr("class", "");

                if($(this).parent("dd").hasClass('active')){
                    $(this).parent("dd").removeClass('active');
                }
                if($(this).data("class") == clazz){
                    $(this).parents("dd").addClass('active');
                } else {
                    $(this).parents("dd").addClass('disabled');
                }
            });  // data-class가 있다면 step_01의 class 값 변경

            if(clazz === 1){
                $('.step_02').find('button').each(function(){
                    var player = $(this).data('player');
                    if(player > 8){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
                $('.step_03').find('button').each(function(){
                    var group = $(this).data('group');
                    if(group < 10 || group > 12){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
            }
            if(clazz === 2){
                $('.step_02').find('button').each(function(){
                    var player = $(this).data('player');
                    if(player > 8){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
                $('.step_03').find('button').each(function(){
                    var group = $(this).data('group');
                    if(group < 12 || group > 14){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
            }
            if(clazz === 3){
                $('.step_03').find('button').each(function(){
                    var group = $(this).data('group');
                    if(group < 11 || group > 13){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
            }
            if(clazz === 4){
                $('.step_03').find('button').each(function(){
                    var group = $(this).data('group');
                    if(group < 10 || group > 14){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
            }
            if(clazz === 5){
                $('.step_02').find('button').each(function(){
                    var player = $(this).data('player');
                    if(player > 8){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
                $('.step_03').find('button').each(function(){
                    var group = $(this).data('group');
                    if(group < 13 || group > 14){
                        $(this).parent("dd").addClass('disabled');
                    }
                })
            }
        }
    });

    $('.step_02').find('button').on('click', function(e){
        if(!$('.step_04').hasClass('animated')){
            if($(this).parent("dd").hasClass("disabled") == false){
                
                selectPlayer = $(this).data("player");

                $('.step_02').find('dd').each(function(){
                    if($(this).hasClass('active')){
                        $(this).removeClass('active');
                    }
                });

                if($(this).data('player') == selectPlayer ){
                    $(this).parent('dd').addClass('active');
                    PlayerPack.ResetChangeInfo();
                    con
                }

            }
        }
    })

    function optionInits(){

    };
    function optionReset(){

    };*/
});
