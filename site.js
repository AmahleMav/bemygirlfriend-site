function sayYes() {

    // hide first page
    document.getElementById("mainCard").classList.add("hidden");

    // show yes page
    document.getElementById("yesPage").classList.remove("hidden");

    // CONFETTI 🎉
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });

    setTimeout(() => confetti(), 300);
    setTimeout(() => confetti(), 600);
    setTimeout(() => confetti(), 900);
}

function moveNo(btn) {

    var x = Math.random() * 250;
    var y = Math.random() * 250;

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}