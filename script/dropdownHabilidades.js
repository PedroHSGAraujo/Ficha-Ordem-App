function toggleDropdown() {
    var caixaMaior = document.getElementById('habilidade-descricao');
    if (caixaMaior.style.display === 'none' || caixaMaior.style.display === '') {
        caixaMaior.style.display = 'block';
    } else {
        caixaMaior.style.display = 'none';
    }
}