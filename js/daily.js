export default function initDaily(container, extremesChangeCallback) {
    Highcharts.stockChart(container, {
        chart: {
            type: 'column',
            animation: false,
            zoomType: 'x',
            // spacing: [0, 0, 0, 0],
            events: {
                load: function () {
                }
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                pointPadding: 0.0,
                color: '#f95d6a'
            },
            area: {
                color: '#f95d6a',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#f95d6aaa'],
                        [1, '#f95d6a22']
                    ]
                },
            }
        },
        boost: {
            enabled: true,
        },
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            type: 'datetime',
            events: {
                setExtremes: function (e) {
                    extremesChangeCallback(e);
                }
            },
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Cases'
            },
            labels: {
                style: {
                    color: '#ffffff',
                    textOutline: '2px contrast'
                }
            },
            showFirstLabel: false,
            gridLineColor: '#262626',
        },
        legend: {
            enabled: false,
        },
        rangeSelector: {
            buttons: [{
                type: 'month',
                count: 1,
                text: '1m'
            }, {
                type: 'month',
                count: 3,
                text: '3m'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0,
        },
        // responsive: {
        //     rules: [{
        //         condition: {
        //             maxWidth: 460
        //         },
        //         chartOptions: {
        //             navigator: {
        //                 enabled: false
        //             },
        //             scrollbar: {
        //                 enabled: false
        //             },
        //         }
        //     }]
        // },
        series: [{}]
    });
}