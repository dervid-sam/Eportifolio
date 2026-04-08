// MENU TOGGLE
function toggleMenu(event) {
    event.stopPropagation();
    let menu = document.getElementById("menu");

    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    let menu = document.getElementById("menu");
    let button = document.querySelector('nav button');
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show");
    }
});

// SEARCH FUNCTION
function searchUnit() {
    let input = document.getElementById("search").value.toLowerCase();
    let list = document.getElementById("unitList").getElementsByTagName("li");

    for (let i = 0; i < list.length; i++) {
        let text = list[i].innerText.toLowerCase();

        if (text.includes(input)) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}

