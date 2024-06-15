    function Calculate() {
        let days = document.querySelector('.days').value;
        let h1 = document.createElement('h1')
        h1.innerText = "Your Age is";
        let p = document.createElement('p')
        let age = Math.floor(days / 365);
        let remainingdays = days % 365;
        let months = Math.floor(remainingdays / 30);
        let otherdays = remainingdays % 30;
        let div = document.querySelector('.result')
        div.appendChild(h1)
        h1.appendChild(p)
        p.innerText = `${age} years  ${months} months and ${otherdays} days`
        console.log(age)
        document.querySelector('.days').value = " ";
    }
