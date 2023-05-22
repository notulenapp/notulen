if (window.localStorage.getItem('role') != "ADMIN") {
    document.getElementById("nav-data-user").setAttribute('class', 'd-none')
    document.getElementById("nav-data-pegawai").setAttribute('class', 'd-none')
} else {
    document.getElementById("nav-data-user").setAttribute('class', '')
    document.getElementById("nav-data-pegawai").setAttribute('class', '')
}