const switchButton = document.querySelector(".moonb");
let theme = localStorage.getItem("theme") || "light";

switchButton.addEventListener("click", () => {
    if (theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        theme = "light";
    } else {
        document.querySelector("body").classList.add("dark");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}

// font size

const fontButton = document.querySelector(".ttb");
let fontSize = localStorage.getItem("fontSize") || "small";

fontButton.addEventListener("click", () => {
    if (fontSize === "big") {
        document.querySelector("body").classList.remove("big");
        fontSize = "small";
    } else {
        document.querySelector("body").classList.add("big");
        fontSize = "big";
    }

    localStorage.setItem("fontSize", fontSize)
});

if (fontSize === "big") {
    document.querySelector("body").classList.add("big");
}

//english

const enButton = document.querySelector(".en")
let lang = localStorage.getItem("lang") || "pl";

enButton.addEventListener("click", () =>{
    if (lang === "eng") {
        document.querySelector("body").classList.remove("eng");
        lang = "pl";
    } else {
        document.querySelector("body").classList.add("eng")
        lang = "eng";
    }
    localStorage.setItem("lang", lang);
    
});

if (lang === "eng") {
    document.querySelector("body").classList.add("eng");
}