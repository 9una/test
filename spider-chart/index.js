/* 1 */
Highcharts.chart('card1', {
    chart: {
        polar:true,
        type:'area', // area & line
        backgroundColor:'#fff',
        margin:[30, 0, 0, 0],
        // height: (9 / 10) * 100 + '%' //반응형높이
    },
    credits: {
        enabled: false
    },
    accessibility: {
        description: '웹접근성을 위한 문구'
    },
    title: {
        text: '타이틀 1',
        x: 0,
        y: 20,
        align: 'center',
        style: {
            color: 'blue',
            margin: 0,
            fontSize: 15,
        }
    },
    pane: {
        size: '70%',
        // center: ["50%", "50%"]
    },
    xAxis: {
        categories: ['cate01', 'cate02', 'cate03', 'cate04', 'cate05', 'cate06'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
            style: {
                color:'red',
                fontSize: 11,
            }
        }
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            style: {
                color: 'green',
                fontSize: 10,
                fontWeight: 'bold'
            }
        }
    },
    tooltip: false,
    // tooltip: {
    //     shared: true,
    //     pointFormat: '<span>{series.name}: <b>{point.y:,.0f} 시간</b><br />',
    //     style: {
    //         color: '#333',
    //         fontSize: '12px',
    //     }
    // },
    legend: false,
    // legend: {
    //     layout: 'horizontal',
    //     squareSymbol: false,
    //     symbolRadius: 2,
    //     align: 'center',
    //     verticalAlign: 'top',
    //     itemMarginTop: 0,
    //     itemMarginBottom: 0,
    //     itemStyle: {
    //         color:'black'
    //     },
    //     itemHoverStyle: {
    //         color:'red'
    //     }
    // },
    series: [{
        type:'area',
        name: 'text a',
        data: [12, 17, 12, 14, 15, 17],
        pointPlacement: 'on',
        color: 'pink',
        opacity: 0.5,
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth:500
            },
            chartOption: {
                legend: {
                    align: 'center',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }
})

/* 2 */
Highcharts.chart('card2', {
    chart: {
        polar:true,
        type:'area',
        backgroundColor:'#fff',
        margin:[30, 0, 0, 0],
    },
    credits: {
        enabled: false
    },
    accessibility: {
        description: '웹접근성을 위한 문구'
    },
    title: {
        text: '타이틀 2',
        x: 0,
        y: 20,
        align: 'center',
        style: {
            color: 'blue',
            margin: 0,
            fontSize: 15,
        }
    },
    pane: {
        size: '70%',
        center: ["50%", "50%"]
    },
    xAxis: {
        categories: ['cate01', 'cate02', 'cate03', 'cate04', 'cate05', 'cate06'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
            style: {
                color:'red',
                fontSize: 11,
            }
        }
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            style: {
                color: 'green',
                fontSize: 10,
                fontWeight: 'bold'
            }
        }
    },
    tooltip: false,
    legend: false,
    series: [{
        type:'area',
        name: 'text a',
        data: [10, 15, 8, 12, 10, 16],
        pointPlacement: 'on',
        color: 'skyblue',
        opacity: 0.5,
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth:500
            },
            chartOption: {
                legend: {
                    align: 'center',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }
})

/* 3 */
Highcharts.chart('card3', {
    chart: {
        polar:true,
        type:'area',
        backgroundColor:'#fff',
        margin:[30, 0, 0, 0],
    },
    credits: {
        enabled: false
    },
    accessibility: {
        description: '웹접근성을 위한 문구'
    },
    title: {
        text: '타이틀 3',
        x: 0,
        y: 20,
        align: 'center',
        style: {
            color: 'blue',
            margin: 0,
            fontSize: 15,
        }
    },
    pane: {
        size: '70%',
        center: ["50%", "50%"]
    },
    xAxis: {
        categories: ['cate01', 'cate02', 'cate03', 'cate04', 'cate05', 'cate06'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        labels: {
            style: {
                color:'red',
                fontSize: 11,
            }
        }
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        labels: {
            style: {
                color: 'green',
                fontSize: 10,
                fontWeight: 'bold'
            }
        }
    },
    tooltip: false,
    legend: false,
    series: [{
        type:'area',
        name: 'text a',
        data: [8, 12, 13, 13, 15, 15],
        pointPlacement: 'on',
        color: 'coral',
        opacity: 0.5,
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth:500
            },
            chartOption: {
                legend: {
                    align: 'center',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }
})