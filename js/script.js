document.querySelectorAll(".card__question")[0].onclick = function() { document.querySelectorAll(".card__answer")[0].style.display = "block";};

for (let i=0; i < 5; i++ ) {
    document.querySelectorAll(".card__question")[i].onclick = function() { document.querySelectorAll(".card__answer")[i].classList.toggle("card__answer--active")};
}