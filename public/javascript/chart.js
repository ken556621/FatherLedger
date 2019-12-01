const ctx = document.getElementById('totalExpense');
const ctx2 = document.getElementById('graduallyExpense');
const weekChart = document.getElementById('week-chart');




const expenseLabel = ['食物', '衣物', '飲料', '交通', '房租'];
const mainColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'];

function getWeekData(){
    axios.get('http://localhost:3000/chart/week').then(res => {
        console.log(res.data);
        //piechart
        const weekData = res.data;
        const eachExpense = [];
        weekData.forEach(eachData => eachExpense.push(sumTotalExpense(eachData)));
        const weekSession = generateTotalExpense(eachExpense);
        drawPieChart(weekSession);
        //linechart
        const categories = [];
        weekData.forEach(list => categories.push((list.sort((a, b) => a.date - b.date))));
        const weekSession2 = generateGraduallyExpense(categories);
        drawLineChart(weekSession2)
        
    }).catch(err => console.log(err));
}

//Sum total expense
function sumTotalExpense(eachCategory){
    let total = 0;
    eachCategory.forEach(list => total += Number(list.price));
    return total;
}




//Generate totalExpense dataset
function generateTotalExpense(eachCategoryExpense){
    let category = '';
    category = {
        data: eachCategoryExpense,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: mainColor,
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(41, 37, 37, 0.2)',
        hoverBorderWidth: 3
    }
    return category;
}



//Generate graduallyExpense dataset
function generateGraduallyExpense(categories){
    const result = [];
    let category = '';
    for(let i =0;i < expenseLabel.length;i++){
        const eachCategoryExpense = [];
        categories[i].forEach(list =>eachCategoryExpense.push(list.price))
        category = {
            label: expenseLabel[i],
            fill: false,
            borderColor: mainColor[i],
            data: eachCategoryExpense
        }
        result.push(category);
    }
    return (result);
}



//draw
function drawPieChart(eachSession){
    const pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: expenseLabel,
            datasets: [
                eachSession
            ]
        }
    })
    return pieChart
}

function drawLineChart(eachSession){
    const lineChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: eachSession
        },
        options: {
            
        }
    })
    return lineChart
}


// //graduallyExpense
// const lineChart = new Chart(ctx2, {
//     type: 'line',
//     data: {
//         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         datasets: generateGraduallyExpense(eachDayExpense)
//     },
//     options: {
        
//     }
// })

weekChart.addEventListener('click', getWeekData);
