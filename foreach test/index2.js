/* content */
const data1 = ["115", "114", "항목1 : 데이터 1-3"];
const data2 = ["항목2 : 데이터 2-1", "항목2 : 데이터 2-2", "항목2 : 데이터 2-3"];
const data3 = ["항목3 : 데이터 3-1", "항목3 : 데이터 3-2", "항목3 : 데이터 3-3"];

const brand1 = ["항목1 : 브랜드 1-1", "항목1 : 브랜드 1-2", "항목1 : 브랜드 1-3"];
const brand2 = ["항목2 : 브랜드 2-1", "항목2 : 브랜드 2-2", "항목2 : 브랜드 2-3"];
const brand3 = ["항목3 : 브랜드 3-1", "항목3 : 브랜드 3-2", "항목3 : 브랜드 3-3"];

const chart1 = ["항목1 : 차트 1-1", "항목1 : 차트 1-2", "항목1 : 차트 1-3"];
const chart2 = ["항목2 : 차트 2-1", "항목2 : 차트 2-2", "항목2 : 차트 2-3"];
const chart3 = ["항목3 : 차트 3-1", "항목3 : 차트 3-2", "항목3 : 차트 3-3"];

const data = [data1, data2, data3];
const brand = [brand1, brand2, brand3];
const chart = [chart1, chart2, chart3];


/* for each test */
const btns = document.querySelector('.btns'),
      btn = document.querySelectorAll(".btn"),
      ul = document.querySelectorAll(".conts ul");

btn.forEach((e, index) => {
    e.addEventListener("click", () => {
        if(!e.classList.contains('active')){ //같은 버튼을 누르면 작동 x
            $('.conts').toggleClass('flipped');
        
            let j = 0;
            while (j < btn.length) {
                btn[j++].classList.remove("active");
            }
            e.classList.add("active"); //버튼.active
            
            
            let i;

            if(btns.classList.contains('first')){
                console.log('처음')
                i = 1;
            }
            
            if(!$('.conts').hasClass('flipped')){
                i = 0; //front
            } else {
                i = 1; //back
            }
            
            ul[i].innerHTML = '';
            data[index].forEach((k, num) => {
                let li = `
                    <li>
                        <span class="data">${data[index][num]}</span> 
                        <div class="brand"><span>${brand[index][num]}</span></div>
                        <div class="chart">${chart[index][num]}</div>
                    </li>
                `;

                ul[i].innerHTML += li;

            });
            btns.classList.remove('first')
        }
    });
});