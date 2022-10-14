// (반응형) : 윈도우 사이즈에 따른 말줄임 글자수 변경

$('li p').each(function(){
    var length;
    const text = $(this).text(); //기존 텍스트 저장
    
    function lengthChange(){
        if($(window).width() > 768){
            length = 80;
        } else {
            length = 30;
        }
    }
    lengthChange();
    
    $(this).each(function () {
        if ($(this).text().length >= length) {
            $(this).text($(this).text().substr(0, length) + "....!!");
        }
    });
    
    $(window).resize(function(){
        lengthChange();

        $('li p').each(function(){
            $(this).text(text);

            $(this).each(function () {
                if ($(this).text().length >= length) {
                    $(this).text($(this).text().substr(0, length) + "....!!");
                }
            });
        
        })
        $('h3').text('text 값 : ' + text);
    })
})