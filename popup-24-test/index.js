const modal = document.querySelectorAll(".modal");
const $reset = document.querySelector('.btn-reset-cookie');
modal.forEach((e, index) => { 
    const $close = e.querySelector('.btn-close');
    const $close24 = e.querySelector('.ipt-24');
    const modalName = 'popup' + index;

    function closeModal(bool) {
        if(bool === true){
            e.remove();
        }
    }

    function on_close_modal24() { 
        setCookie(modalName, "done", 1);
        //close
        closeModal(true);
    }
    function on_close_modal() {
        //close
        closeModal(true);
    }

    /* 쿠키 */
    function setCookie(name, value, expiredays) {
        let today = new Date();
        today.setDate(today.getDate() + expiredays);
    
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + today.toGMTString() + ";"
    }//setCookie

    function getCookie() {
        const cookieData = document.cookie;
        console.log(cookieData);
        if (cookieData.indexOf(`${modalName}=done`) < 0) {
            closeModal(false);
        }
        else {
            closeModal(true);
        }
    }//getCookie

    function deleteCookie(name){
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }//deleteCookie


    getCookie();
    $close.addEventListener('click', on_close_modal); //닫기버튼
    $close24.addEventListener('click', on_close_modal24); //24시간닫기버튼
    $reset.addEventListener('click', () => {
        deleteCookie(modalName);
    })
})