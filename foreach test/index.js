/* content */
const titleLeft = [
    "1. Lorem ipsum dolor sit elit.",
    "2. Lorem ipsum dolor sit elit.",
    "3. Lorem ipsum dolor sit elit."
];
const titleRight = [
    "4. Lorem ipsum dolor sit elit.",
    "5. Lorem ipsum dolor sit elit.",
    "6. Lorem ipsum dolor sit elit.",
    "7. Lorem ipsum dolor sit elit."
];

const textLeft = [
    "text1 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae, corrupti ut perferendis praesentium odio doloremque asperiores ad excepturi aut!",
    "text2 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae, corrupti ut perferendis praesentium odio doloremque asperiores ad excepturi aut!",
    "text3 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae, corrupti ut perferendis praesentium odio doloremque asperiores ad excepturi aut!"
];
const textRight = [
    "text4 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae, corrupti ut perferendis praesentium odio doloremque asperiores ad excepturi aut!",
    "text5 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae, corrupti ut perferendis praesentium odio doloremque asperiores ad excepturi aut!",
    "text6 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae, corrupti ut perferendis praesentium odio doloremque asperiores ad excepturi aut!",
    "text7 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae, corrupti ut perferendis praesentium odio doloremque asperiores ad excepturi aut!"
];


const title = [titleLeft, titleRight];
const text = [textLeft, textRight];


/* for each test */
const btn = document.querySelectorAll(".btn"),
      ul = document.querySelector(".conts ul");

btn.forEach((e, index) => { //첫번째는 element. 두번째는 순서. 세번째까지 있다면 array
    e.addEventListener("click", () => {
        if (index == 0) {
            ul.className = "cont left";
        } else if (index == 1) {
            ul.className = "cont right";
        }

        ul.innerHTML = ""; //reset

        let j = 0;
        while (j < btn.length) {
            btn[j++].classList.remove("active");
        }
        e.classList.add("active"); //버튼
        
        const titleNum = title[index],
              textNum = text[index];
              
        titleNum.forEach((k, num) => {
            const li = `
                <li>
                    <div class="title"><span>${k}</span></div>
                    <div class="text"><p>${textNum[num]}</p></div>
                </li>
            `;
            ul.innerHTML += li;
        });
    });
});