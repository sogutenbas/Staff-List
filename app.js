let addToBuyButtons = document.getElementsByClassName("container")
for (let i = 0; i < addToBuyButtons.length; i++) {
    addToBuyButtons[i].addEventListener("click", addToClicked)
}


function addToClicked(event) {
    let container = event.target.parentElement.parentElement
    let name = personelName.getElementsByClassName("name")[0].innerText
    let distance = personelDistance.getElementsByClassName("distance")[0].innerText
    let img = personelImage.getElementsByClassName("img")[0].src
    addToBox(name, distance, img)
}

function addToBox(name, distance, img) {
    let boxRow = document.createElement("div")
    boxRow.classList.add("cart-row")
    let cartItems = document.getElementsByClassName("cart-items")[0]


    let footItemNames = cartItems.getElementsByClassName("cart-item-title")
    for (let i = 0; i < footItemNames.length; i++) {
        if (footItemNames[i].innerText == title) {

            return
        }
    }


    let cartRowConnents = ` <div class="cart-item cart-column">
<img class="pernonel-image" src="${img}" width="100" height="100">
<span class="personel-name">${name}</span>
</div>
<span class="cpersonel-distance">${distance} </span>
<div class="cart-quantity cart-column">
<input class="cart-quantity-input" type="number" value="1">
<button class="btn btn-danger" type="button">REMOVE</button>
</div>`
    boxRow.innerHTML = cartRowConnents
    cartItems.append(boxRow)
    boxRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeItems)
    boxRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged)

}