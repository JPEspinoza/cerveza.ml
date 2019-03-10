var input = document.querySelector('#calorias');
var output = document.querySelector('#cervezas');
var calorias = 500;

function update()
{
    var cervezas = input.value / calorias;

    output.value = cervezas;
}

input.addEventListener('input', function()
{
    update();
});

function size(size)
{
    calorias = size;

    id = event.srcElement.id;

    /* remove active buttons */
    var temp = document.getElementsByClassName("active")
    if(temp.length != 0)
    {
        temp[0].className = "";
    }

    /* new active button */
    document.getElementById(id).className = "active";
    update();
}
