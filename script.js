const container = document.querySelector(".container")
container.style.width = "100%"
container.style.height = "100%"
sor = 0
for (let i = 0; i < 64; i++) {
    for (j = 0; j < 64; j++) {

        let div = document.createElement("div")
        var breakcol = document.createElement("div")

        if (sor == 644) {
            breakcol.style.display = "flex"
            breakcol.style.flexBasis = "100%"
            breakcol.style.width = "0"
            container.appendChild(breakcol)
            sor = 0
        }

        div.style.border = "1px solid black"
        div.style.display = "inline-flex"
        div.style.width = "5vh"
        div.style.height = "5vh"
        div.style.marginRight = "5px"
        div.style.marginBottom = "5px"
        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = "black"
        })
        container.appendChild(div)


        sor = sor + 1
    }


}


