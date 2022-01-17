
let notification = document.querySelector(".notification")
let add_to_Cart = document.querySelector("#add_to_cart")
let reset = document.querySelector(".reset")
let board = document.querySelector(".board")
let added_items = 0
let foodName
let foodPrice
let total = 0

document.querySelector(".selected_order").addEventListener("change", function (e) {
   
    foodName = this.options[this.selectedIndex].text
    foodPrice = Number(this.options[this.selectedIndex].value)
    if (this.options[this.selectedIndex].text === 'select food') {
        
        notification.innerHTML = ""
        add_to_Cart.style.display = "none"
        return false
    }

    notification.innerHTML = `
            you have selected ${foodName} : ${foodPrice} 
    `
    add_to_Cart.style.display = "inline-block"
})

add_to_Cart.addEventListener("click", function () {
    //update the board

    if (added_items > 3) {
        alert("maximum items on cart exceeded")
        return false
    } 

    let div = document.createElement("div")
    board.appendChild(div)
    div.innerHTML = `
        ${foodName} : ${foodPrice}   
    `
    added_items++
    total = total + foodPrice
    document.querySelector(".total").textContent = `Total : ${total}`
})

reset.addEventListener("click", function () {
    board.innerHTML = ""
    added_items = 0
    total = 0
    document.querySelector(".total").textContent = `Total : 0`
    document.querySelector(".selected_order").selectedIndex = 0
    notification.innerHTML = ""
})