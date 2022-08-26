function navCall(event){
    const mobileGNB = document.querySelector('.m_gnb');
    mobileGNB.classList.toggle('active');
    event.target.classList.toggle('active');
    document.querySelector('body').classList.toggle('non-scroll');
}