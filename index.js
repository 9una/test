

function navCall(event){
    const mobileGNB = document.querySelector('.m_gnb');
    mobileGNB.classList.toggle('active');
    event.target.classList.toggle('active');
    document.querySelector('body').classList.toggle('non-scroll');
    // if(mobileGNB.classList.contains('active')){
    //     document.querySelector('html').style.overflow = "hidden";
    // }
    // if(mobileGNB.classList.contains('active') == false){
    //     document.querySelector('html').style = "";
    // }
    //document.querySelector('body').classList.toggle('non-scroll');
}