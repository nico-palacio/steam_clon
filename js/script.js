function link_RDRII() {
    window.location.href = "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2?snr=1_7_15__13";
}

function link_WOT() {
    window.location.href = "https://store.steampowered.com/app/1407200/World_of_Tanks/";
}

function link_DSR() {
    window.location.href = "https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/";
}

function link_CS2() {
    window.location.href = "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/";
}

function link_FF14() {
    window.location.href = "https://store.steampowered.com/app/39210/FINAL_FANTASY_XIV_Online/";
}

function link_F124() {
    window.location.href = "https://store.steampowered.com/app/2488620/F1_24/";
}

function link_VS() {
    window.location.href = "https://store.steampowered.com/app/1794680/Vampire_Survivors/";
}
function link_HK() {
    window.location.href = "https://store.steampowered.com/app/367520/Hollow_Knight/";
}

function link_SV() {
    window.location.href = "https://store.steampowered.com/app/413150/Stardew_Valley/";
}

document.getElementById('contactForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);

    alert("¡Se ha enviado tu formulario correctamente!");
});