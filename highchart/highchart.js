/*------------------------------------------------------*/
        //page 1
const CATE_1_DATA_0 = [1, 1, 1, 1, 1, 1, 9],
      CATE_1_DATA_1 = [2, 2, 2, 2, 2, 2, 9],
      CATE_1_DATA_2 = [3, 3, 3, 3, 3, 3, 9],

      //page2
      CATE_2_DATA_0 = [4, 4, 4, 4, 4, 4, 9],
      CATE_2_DATA_1 = [5, 5, 5, 5, 5, 5, 9],
      CATE_2_DATA_2 = [6, 6, 6, 6, 6, 6, 9],
      
      //page3
      CATE_3_DATA_0 = [7, 7, 7, 7, 7, 7, 9],
      CATE_3_DATA_1 = [8, 8, 8, 8, 8, 8, 9],
      CATE_3_DATA_2 = [9, 9, 9, 9, 9, 9, 9];

const text1 = ['접근성텍스트', '안녕하세요', '반가워요'];
const text2 = ['부산집', '코코넛크랩', '쌀국수'];
const text3 = ['맛도리', '푸드파이터', '다이어터'];
/*------------------------------------------------------*/

let key;
const chart = document.querySelectorAll('.chart > div');
const cate = document.querySelector('.cate');

chart.forEach((e, index)=>{
    //console.log(eval('data' + i));
    if(cate.classList.contains('cate1')){key = 1;}
    if(cate.classList.contains('cate2')){key = 2;}
    if(cate.classList.contains('cate3')){key = 3;}
    
    var chartOption = {
        chart: {
            polar: true, type: 'area', backgroundColor:'transparent', margin:10,
        },
        
        credits: {
            enabled: false
        },

        accessibility: {
            description: eval('text' + key + '[index]')
        },

        title: false,

        pane: {
            startAngle:-51, size: '77%', center:["50%", "40%"]
        },

        legend:{
            layout: 'horizontal',
        },

        xAxis: {
            categories: ['여성', '남성', '60대', '50대', '40대', '30대', '20대'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels:{
                style:{ color:"#ef4a5a", fontSize:15, fontFamily: 'Noto Sans KR',}
            }
        },

        yAxis: {
            gridLineInterpolation: 'polygon', lineWidth: 0, min: 0,
        },

        tooltip: {
            enabled: false
        },
        series: [{
            showInLegend: false,
            data: eval('CATE_' + key + '_DATA_' + index), // 문자열을 변수로
            pointPlacement: false,
            color:'#ef4a5a',
            opacity:0.35,
        }],
        responsive: {  
        rules: [{  
                condition: {maxWidth: 768},  
                chartOptions: {
                    legend: {align: 'center', verticalAlign: 'top', layout: 'horizontal'},
                    pane: {size: '66%'}
                }  
            }]  
        }
    }

    eval("var chartName" + index + ' = chartOption');

    /* highchart 연결 */
    const chartID = chart[index].className; //클래스명과 동일한 아이디에게 차트 보여줌
    Highcharts.chart(`${chartID}`, eval("chartName" + index));
    console.log(eval("chartName" + index));
})

// Highcharts.chart('chart1', chartOption);
// Highcharts.chart('chart2', chartOption);
// Highcharts.chart('chart3', chartOption);
