function srch() {
    document.getElementById("m_srch").innerHTML = '<ul id="ul_srch"> <li id="li_srch"> <a onclick="coord()">Koordinatne sustave.</a> </li> </ul>';
    document.getElementById("li_srch a").style.display="block";
}

function coord() {
    document.getElementById("ans").innerHTML = 'Evo link: <a href="_blank" target="_self" style="cursor: pointer; color: white;">Klikni me</a>'
    document.getElementById("ans").style.display = 'block'
}