var input = document.querySelector('#calorias');
var output = document.querySelector('#cervezas');
var calorias = 150;

function update()
{
    var cervezas = Number(input.value) / calorias;

    cervezas = Math.trunc(cervezas);

    output.value = cervezas;
}

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

input.addEventListener('input', function()
{
    update();
});

update();
