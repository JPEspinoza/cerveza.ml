var caloriesInput = document.querySelector('#calorias');
var beersInput = document.querySelector('#cervezas');
var caloriesPerBeer = 150;

var last = "calories";

function toFixed(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

function updateBeers()
{
    var beers = Number(caloriesInput.value) / caloriesPerBeer;

    beersInput.value = toFixed(beers, 2);
}

function updateCalories()
{
    var calories = Number(beersInput.value) * caloriesPerBeer;

    caloriesInput.value = calories;
}

function size(size)
{
    caloriesPerBeer = size;
    if(last == "calories")
    {
        updateBeers();
    }
    else if(last == "beers")
    {
        updateCalories();
    }

    id = event.srcElement.id;

    /* remove active buttons */
    var temp = document.getElementsByClassName("active")
    if(temp.length != 0)
    {
        temp[0].className = "";
    }

    /* new active button */
    document.getElementById(id).className = "active";
}

caloriesInput.addEventListener('input', function()
{
    updateBeers();
    last = "calories";
});

beersInput.addEventListener('input', function(){
    updateCalories();
    last = "beers";
});

updateBeers();
updateCalories();
