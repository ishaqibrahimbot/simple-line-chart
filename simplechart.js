let counter = 0;
let x_vals = [];
let index = 0;

for (i=0; i<100; i+=0.1){
    x_vals.push(i);
}
// let someWord = 'SomeWord';
function sinu(x){
    return Math.sin(x);
}

function cosi(x){
    return Math.cos(2*x);
}

function tang(x){
    return Math.sinh(3*x);
}

let data_set = {
    labels: [],
    datasets: [{
        label: "Linear",
        fill: false,
        borderColor: "#f54242",
        data: []
    }, {
        label: "Quadratic",
        borderColor: "#4245f5",
        fill: false,
        data: []
    }, {
        label: "Cubic",
        borderColor: "#42f545",
        fill: false,
        data: []
    }]
};

console.log(data_set.datasets[1]);
// console.log(_.get(data_set, 'datasets.0.data.0'));
console.log(data_set.datasets[0].data[2]);

function setup(){
    createCanvas(400, 400);
    background(0);
}

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: data_set,
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                scaleLabel: {
                    display: true,
                    labelString: "# of iterations"
                }
            }],

            yAxes: [{
                gridLines: {
                    display: false
                },
                scaleLabel: {
                    display: true,
                    labelString: "Cost"
                }
            }]
        }, 
    }
    });

// myChart.options.elements.line['backgroundColor'] = "rgba(255, 0, 0, 0.2)";

function draw(){
    
    if (counter % 50 === 0){
        data_set.labels.push(counter.toString());
        data_set.datasets[0].data.push(sinu(x_vals[index]));
        data_set.datasets[1].data.push(cosi(x_vals[index]));
        // data_set.datasets[2].data.push(tang(x_vals[index]));
        myChart.update();
        index += 1;
    }

    counter += 1;
}

