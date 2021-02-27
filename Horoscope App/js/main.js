document.querySelector("#sign").addEventListener("click", findSign)


function findSign() {
    let month = document.querySelector("#birthMonth").value
    let day = Number(document.querySelector("#birthday").value)
        if((month === "December" && day >= 22) || (month === "January" && day <= 19)){
        document.querySelector("#horoscope").innerText = "You are a Capricorn.You are serious, independent, disciplined and tenacious.";
    } else if((month === "January" && day >= 20) || (month === "February" && day <= 18)) {
        document.querySelector("#horoscope").innerText = "You are an Aquarius. You are deep, imaginative, original and uncompromising.";
    } else if((month === "February" && day >= 19) || (month === "March" && day <= 20)) {
        document.querySelector("#horoscope").innerText = "You are a Pisces. You are affectionate, empathetic, wise and artistic.";
    } else if((month === "March" && day >= 21) || (month === "April" && day <= 19)) {
        console.log("You are an Aries. You are eager, dynamic, quick and competitive.");
    } else if((month === "April" && day >= 20) || (month === "May" && day <= 20)) {
        document.querySelector("#horoscope").innerText = "You are a Taurus. You are strong, dependable, sensual and creative.";
    } else if((month === "May" && day >= 21) || (month === "June" && day <= 20)) {
        document.querySelector("#horoscope").innerText = "You are a Gemini. You are versatile, expressive, curious and kind.";
    } else if((month === "June" && day >= 21) || (month === "July" && day <= 22)) {
        document.querySelector("#horoscope").innerText = "You are a Cancer. You are intuitive, sentimental, compassionate and protective.";
    } else if((month === "July" && day >= 23) || (month === "August" && day <= 22)) {
        document.querySelector("#horoscope").innerText = "You are a Leo. You are dramatic, outgoing, fiery and self-assured.";
    } else if((month === "August" && day >= 23) || (month === "September" && day <= 22)) {
        document.querySelector("#horoscope").innerText = "You are a Virgo. You are practical, loyal, gentle and analytical.";
    } else if((month === "September" && day >= 23) || (month === "October" && day <= 22)) {
        document.querySelector("#horoscope").innerText = "You are a Libra. You are social, fair-minded, diplomatic and gracious.";
    } else if((month === "October" && day >= 23) || (month === "November" && day <= 21)) {
        document.querySelector("#horoscope").innerText = "You are a Scorpio. You are passionate, stubborn, resourceful and brave.";
    } else if((month === "November" && day >= 22) || (month === "December" && day <= 21)) {
        document.querySelector("#horoscope").innerText = "You are a Sagittarius. You are extroverted, optimistic, funny and generous.";
    } else {
        document.querySelector("#horoscope").innerText = "You are an alien.";
    }
}