const btn = document.querySelector(".add");
const wrap = document.querySelector(".wrap");

btn.addEventListener("click", () => {
    const x = Math.floor(Math.random() * 100),
          y = Math.floor(Math.random() * 100), // 0 ~ 100
          width = Math.floor(Math.random() * 500) + 100, // 100 ~ 500
          //정사각형 아니면 height값도 생성해주기
          duration = Math.random() * 3000 + 500; //0.5초 ~ 3초
    const box = document.createElement("div");

    box.style.left = x + "%";
    box.style.top = y + "%"; //랜덤 위치
    box.style.background = `url('https://picsum.photos/${width + 50}')no-repeat center / 100%`;

    box.style.width = width + "px";
    box.style.height = width + "px"; //랜덤 사이즈

    const animation = box.animate([
        { width: `${width + 50}px`, height: `${width + 50}px` },
        { width: `${width}px`, height: `${width}px` },
        { width: `${width + 50}px`, height: `${width + 50}px` }
    ],{
        duration: duration,
        iterations: Infinity
    });

    wrap.appendChild(box);

    const img = document.querySelectorAll(".wrap > div");
    img.forEach((e) => {
        e.addEventListener("click", () => {
            e.remove();
        });
    });
});