
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

let options2={
    series: [
        {
            data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
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
    colors: ['#e7515a'],
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

var chart = new ApexCharts(document.querySelector("#chart2"), options2);

chart.render();

let options3={
    series: [
        {
            data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
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

var chart = new ApexCharts(document.querySelector("#chart3"), options3);

chart.render();

let options4={
    series: [
        {
            data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
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
    colors: ['#e7515a'],
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

var chart = new ApexCharts(document.querySelector("#chart4"), options4);

chart.render();

let options5={
    series: [
        {
            data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
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

var chart = new ApexCharts(document.querySelector("#chart5"), options5);

chart.render();

let options6={
    series: [
        {
            data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
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
    colors: ['#e7515a'],
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

var chart = new ApexCharts(document.querySelector("#chart6"), options6);

chart.render();


