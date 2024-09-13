// Här lägger jag in de hårdkodade variablerna som skulle finnas i uppgiften.
const korrektNamn = "test";
const korrektLosenord = "1234";

/*Skapar min login-funktion. Börjar med att hämta input från textfälten av användaren.
Sedan skapar jag en if-sats där input stämmer överens med villkoren så hamnar du på välkomstsidan och
vi sparar inloggningsstatus i localStorage.
om inte så kommer användaren till felhanteringen. Detta gjorde jag genom getElementById och id som jag skapade
i min HTML för alla olika vyer.*/
function login() 
{
    const namn = document.getElementById("textinput").value;
    const losenord = document.getElementById("loseninput").value;

    
    if (namn === korrektNamn && losenord === korrektLosenord)
         {
        //Om användaren anger rätt användarnamn och lösen så sparas det i localStorage.
        localStorage.setItem("inLoggad", "sparat");
        
        document.getElementById("loginsida").style.display = "none";
        document.getElementById("valkomstsida").style.display = "block";
        document.getElementById("felmeddelande").style.display = "none";
    } 
    else 
    {
        document.getElementById("loginsida").style.display = "none";
        document.getElementById("valkomstsida").style.display = "none";
        document.getElementById("felmeddelande").style.display = "block";
    }
}

/*Här skapar jag loggaut-funtionen. Genom samma process som åvan. Jag använder mig av GetElementById och = "block" för att hela elementet
ska synas. "none" används för de sidorna jag inte vill visa. Sedan försökte jag mig på att implementera
en localStorage och i denna funktion använder jag "removeItem" för att jag vill att ta bort det som är sparat i localStorgare
när användaren vill logga ut. */
function logout() 
{
    localStorage.removeItem("inLoggad"); // Om användaren loggar ut så tar vi bort det som är sparat i local storage.
    document.getElementById("loginsida").style.display = "block";
    document.getElementById("valkomstsida").style.display = "none";
    document.getElementById("felmeddelande").style.display = "none";
}

/*Här har jag skapat en goBack-funktion för min knapp som finns på felhanteringssidan, där du kan klicka
tillbaka till loginsidan. Så därför har jag lagt in en block på loginsidan för att endast den ska visas. */
function goBack() 
{
    document.getElementById("loginsida").style.display = "block";
    document.getElementById("valkomstsida").style.display = "none";
    document.getElementById("felmeddelande").style.display = "none";
}
/* Jag börjar med att använda DOM-manipulation för att säkerställa att sidan laddat först,detta
för att inga fel ska uppstå när jag kör min kod.*/
document.addEventListener("DOMContentLoaded", function()
 {
    /*Sedan skapar jag en if-sats för min localStorage.Detta för att endast rätt sida ska visas
    efter att jag inplementerade min local storage.Den låter alltså mina HTML element ladda först.*/
    const inLoggad = localStorage.getItem("inLoggad");
    if (inLoggad === "sparat")
    {
        // Om användaren är inloggad, visa välkomstsidan
        document.getElementById("loginsida").style.display = "none";
        document.getElementById("valkomstsida").style.display = "block";
        document.getElementById("felmeddelande").style.display = "none";
    } else 
    {
        // Om användaren inte är inloggad, visa inloggningssidan
        document.getElementById("loginsida").style.display = "block";
        document.getElementById("valkomstsida").style.display = "none";
        document.getElementById("felmeddelande").style.display = "none";
    }
});