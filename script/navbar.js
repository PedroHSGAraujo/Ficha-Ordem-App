var inventarioPage = document.getElementById("inventario");
var atributosPage = document.getElementById("atributos");
var testeLPage = document.getElementById("testeL");
var perfilPage = document.getElementById("perfil");
var habilidadesPage = document.getElementById("habilidades");
var testeRPage = document.getElementById("testeR");
var configPage = document.getElementById("config");


function inventario() {
    inventarioPage.style.marginLeft = "0px";
    atributosPage.style.marginLeft = "100%"
    testeLPage.style.marginLeft = "-100%";
    perfilPage.style.marginLeft = "-200%";
    habilidadesPage.style.marginLeft = "200%";
    testeRPage.style.marginLeft = "300%";
    configPage.style.marginLeft = "400%";
}
function atributos() {
    atributosPage.style.marginLeft = "0px";
    inventarioPage.style.marginLeft = "-100%";
    testeLPage.style.marginLeft = "-200%";
    perfilPage.style.marginLeft = "-300%";
    habilidadesPage.style.marginLeft = "100%";
    testeRPage.style.marginLeft = "200%";
    configPage.style.marginLeft = "300%";
}
function testel() {
    testeLPage.style.marginLeft = "0px";
    atributosPage.style.marginLeft = "200%";
    inventarioPage.style.marginLeft = "100%";
    perfilPage.style.marginLeft = "-100%";
    habilidadesPage.style.marginLeft = "300%";
    testeRPage.style.marginLeft = "400%";
    configPage.style.marginLeft = "500%";
}
function perfil() {
    perfilPage.style.marginLeft = "0px";
    atributosPage.style.marginLeft = "300%";
    inventarioPage.style.marginLeft = "200%";
    testeLPage.style.marginLeft = "100%";
    habilidadesPage.style.marginLeft = "400%";
    testeRPage.style.marginLeft = "500%";
    configPage.style.marginLeft = "600%";
}
function habilidades() {
    habilidadesPage.style.marginLeft = "0px";
    perfilPage.style.marginLeft = "-400%";
    atributosPage.style.marginLeft = "-100%";
    inventarioPage.style.marginLeft = "-200%";
    testeLPage.style.marginLeft = "-300%";
    testeRPage.style.marginLeft = "100%";
    configPage.style.marginLeft = "200%";
}
function tester() {
    testeRPage.style.marginLeft = "0px";
    habilidadesPage.style.marginLeft = "-100%";
    perfilPage.style.marginLeft = "-500%";
    atributosPage.style.marginLeft = "-200%";
    inventarioPage.style.marginLeft = "-300%";
    testeLPage.style.marginLeft = "-400%";
    configPage.style.marginLeft = "100%";
}
function config() {
    configPage.style.marginLeft = "0px";
    testeRPage.style.marginLeft = "-100%";
    habilidadesPage.style.marginLeft = "-200%";
    perfilPage.style.marginLeft = "-600%";
    atributosPage.style.marginLeft = "-300%";
    inventarioPage.style.marginLeft = "-400%";
    testeLPage.style.marginLeft = "-500%";
}

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));