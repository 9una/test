// li안에 여러 줄(p)의 문장을 하나의 줄로 쭉 연결시킴
$('li').each(function(){
    const texts = $(this).children('p').text();
    $(this).html("<p>" + texts + "</p>");
});

// (반응형) : 윈도우 사이즈에 따른 말줄임 글자수 변경
var length;

function lengthChange(){
    if(window.innerWidth > 768){
        length = 80;
    } else {
        length = 20;
    }
}

const li = document.querySelectorAll('li');

for(let i = 0; i < li.length; i++){
    const text = li[i].querySelector('p').innerText;

    lengthChange();
    
    if(li[i].innerText.length >= length){
        li[i].innerText = li[i].innerText.substring(0, length) + "... ";
    }

    window.addEventListener('resize', ()=>{
        li[i].innerText = text;
        
        lengthChange();

        if(li[i].innerText.length >= length){
            li[i].innerText = li[i].innerText.substring(0, length) + "... ";
        }

    })
}
