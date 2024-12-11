
let options={
    series: [
        {
            data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
        },
    ],
    chart: {
        height: 45,
        type: 'line',
        sparkline: {
            enabled: true,
        },
    },
    stroke: {
        width: 2,
    },
    markers: {
        size: 0,
    },
    colors: ['#00ab55'],
    grid: {
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (formatter = () => {
                    return '';
                }),
            },
        },
    },
    responsive: [
        {
            breakPoint: 576,
            options: {
                chart: {
                    height: 95,
                },
                grid: {
                    padding: {
                        top: 45,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
        },
    ],
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
