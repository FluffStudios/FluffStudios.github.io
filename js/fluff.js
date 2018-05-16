function openTab(name, element)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++)
    {
        tablinks[i].classList.remove('tabactive');
    }

    document.getElementById(name).style.display = "block";
    element.classList.add('tabactive');
}

function finalize()
{
    document.getElementsByClassName('tabactive')[0].click();
}