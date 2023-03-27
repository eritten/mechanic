window.addEventListener("load", ()=>{
    // menu and search button functionality 
    const menuBtn = document.querySelector(".menu-btn")
    const menuList = document.querySelector(".nav-list")
    
    menuBtn.addEventListener("click", toggleNav)

    function toggleNav() {
        menuList.classList.toggle("active")
        if (menuList.classList.contains("active")){
            menuBtn.innerHTML = `<i class="fas fa-times"></i>`
        }else {
            menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
        }
    }
    function removeNav() {
        menuList.classList.remove("active")
    }
    // disappear on scroll
    window.addEventListener("scroll", ()=>{
        menuList.classList.remove("active", screenY > 0)
        menuBtn.innerHTML = `<i class="fas fa-bars"></i>`
    })


})