// Nav Bar
let menu = document.querySelector(".hamburger")
let sideBar = document.querySelector("#side_bar")


document.onclick = function(e) {
  if(e.target.id !== 'side_bar' && e.target.id !== 'toggle'){
    toggle.classList.remove('active')
    sideBar.classList.remove("active")
  }
}


menu.onclick = function() {
  menu.classList.toggle('active')
  sideBar.classList.toggle("active")
} 

// Dark Mode Option

const checkBox = document.getElementById('checkbox')
const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')

checkBox.addEventListener('change', () => {
  document.body.classList.toggle("dark")
  h2.forEach(h2 => {
    h2.classList.toggle('dark')
  });

h3.forEach(h3 => {
  h3.classList.toggle('dark')
});

})