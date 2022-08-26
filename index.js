

function navCall(event){
    const mobileGNB = document.querySelector('.m_gnb');
    mobileGNB.classList.toggle('active');
    event.target.classList.toggle('active');
    if(mobileGNB.classList.contains('active')){
        document.querySelector('body').style.overflow = "hidden";
    }
    if(mobileGNB.classList.contains('active') == false){
        document.querySelector('body').style = "";
    }
    //document.querySelector('body').classList.toggle('non-scroll');
}