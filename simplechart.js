let data_set = {
    labels: ['Red', 'Green', 'Blue'],
    datasets: [{
        label: "# of colors",
        data: [2, 3, 4]
    }],
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: data_set,
    // options: options
});

