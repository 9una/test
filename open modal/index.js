const bodyElem = document.querySelector("body");

function closeModal(event){
    const modalWrapperElem = document.querySelector(".modal-wrapper");
    bodyElem.removeChild(modalWrapperElem);
    bodyElem.classList.remove("locked");
};

function stopPropagation(e){
    e.stopPropagation(); //js
};

function openModal(){
    const modalWrapperElem = document.createElement("div");
    modalWrapperElem.addEventListener("click", closeModal);
    modalWrapperElem.classList.add("modal-wrapper");

    const modalElem = document.createElement("div");
    modalElem.classList.add("modal");
    modalElem.addEventListener("click", stopPropagation);

    const modalContentElem = document.createElement("div");
    modalContentElem.classList.add("modal-content");
    modalContentElem.innerHTML = `<span>This is Modal</span>`;

    const closeBtn = document.createElement("div");
    closeBtn.classList.add("close-modal-btn");
    closeBtn.innerHTML = "닫기";
    closeBtn.addEventListener("click", closeModal);

    modalElem.appendChild(modalContentElem);
    modalElem.appendChild(closeBtn);

    modalWrapperElem.appendChild(modalElem);
    bodyElem.appendChild(modalWrapperElem);
    bodyElem.classList.add("locked");
}

function init(){
    const openModalBtnElem = document.querySelector(".open-modal-btn");
    openModalBtnElem.addEventListener("click", openModal);
};

document.addEventListener("road", () => {
    init();
});