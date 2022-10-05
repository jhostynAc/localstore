let nombre, apellido, nombre_usuario, Email, direccion, ciudad

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    leerData()
    
})
function leerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    nombre_usuario = document.getElementById('username').value
    Email = document.getElementById('email').value
    direccion = document.getElementById('address').value
    ciudad = document.getElementById('country').value
    GuardarlocalStorage(nombre, apellido, nombre_usuario, Email, direccion, ciudad)
}
function GuardarlocalStorage(nombre, apellido, nombre_usuario, Email, direccion, ciudad) {
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('apellido', apellido)
    localStorage.setItem('nombre_usuario', nombre_usuario)
    localStorage.setItem('direccion', direccion)
    localStorage.setItem('ciudad', ciudad)
    localStorage.setItem('Email',Email)
    extraerLocalStrage()
}
function extraerLocalStrage(){
    let nom=localStorage.getItem('nombre')
    let ape=localStorage.getItem('Apellido')
    let user=localStorage.getItem('username')
    let mail=localStorage.getItem('Email')
    let dir=localStorage.getItem('Direccion')
    let city=localStorage.getItem('ciudad')
    alert('bienvenido',nom.ape,user,mail,dir,city)
}