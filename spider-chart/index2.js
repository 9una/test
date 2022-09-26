Highcharts.chart('polygon-chart', {
    chart: {
        backgroundColor:'transparent',
        polar:true,
        type:'area',
        height: (9 / 10) * 100 + '%'
    },
    credits: {
        enabled: false,
    },
    accessibility: {
        description: '',
    },
    title: {
        text:'title',
        style: {
            color:'#fff'
        }
    },
    xAxis: {
        categories: ['a', 'b', 'c', 'd', 'e', 'f'],
        tickmarkPlacement: 'on',
        color:'#ccc',
        lineWidth: 0,
        labels: {
            style: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            style: {
                color: '#ddd'
            }
        },
        lineColor: 'yellow'
    },
    tooltip: false,
    legend: false,
    series: [{
        type: 'area',
        name: 'test',
        data: [10, 12, 15, 10, 13, 19],
        color: 'pink',
        pointPlacement: 'on',
        opacity: '0.8',
        marker: {
            states: {
                hover: {
                    enabled: false, //마커에 hover시 효과 x
                }
            },
        }
    }],
    // responsive: {
    //     rules: [{
    //         condition: {
    //             maxWidth: 500
    //         },
    //         chartOptions: {
    //             pane: {
    //                 size: '70%'
    //             },
    //         }
    //     }]
    // }
})