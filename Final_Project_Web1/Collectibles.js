//After Viewing Cart it is advised to refresh the page.
//If not you will still add Collectables to the Cart but the Individual totals will not Update...
//But the Final total will reflect the Actual totals...(However many times the user has clicked "Pre-Order")


//Defining Pre order Buttons
let DCPreOrderButton = document.getElementById("DCButton");
let LSPreOrderButton = document.getElementById("LSButton");
let TORWAPreOrderButton = document.getElementById("TORWAButton");

// Defining Titles for Plushies
let DCPlush = document.getElementById("DigCraftPlush");
let LSPlush = document.getElementById("LightCraftPlush");
let TORWAPlush = document.getElementById("TORWAPlush");

//Defining Cart modal
let cartBody = document.getElementById("cartBody");
let CartOrderButton = document.getElementById("OrderButton");

let cartModal = document.getElementById("cart");

let cart = [];


//Defining Final Price
let TotalFinalPrice = document.getElementById("totalFinalPrice");


//Collectible Totals:
let Collectible1Total = 0;
let Collectible2Total = 0;
let Collectible3Total = 0;

//Plushies Prices:
let DCPlushPrice = 20.00;
let LSPlushPrice = 35.00;
let TORWAPlushPrice = 55.00;


TotalFinalPrice.innerText += 0;

//Clear buttons
let DCPlushClearButton = "<button class='delete-item btn btn-danger' id='DCClearButton' data-name=" + "DigCraft" + ">X</button>";
let LSPlushClearButton = "<button class='delete-item btn btn-danger' id='DCClearButton' data-name=" + "DigCraft" + ">X</button>";
let TORWAPlushClearButton = "<button class='delete-item btn btn-danger' id='DCClearButton' data-name=" + "DigCraft" + ">X</button>";





let cartModalNav = document.getElementById("cartNavModalOpen");

let cartModalPressed = false;

//Pre Order Buttons
DCPreOrderButton.addEventListener('click', function (e) {
    cart[0] = "Dig Craft";
    console.log("DC Pre Order button pressed")
    console.log(Collectible1Total + " Collecible 1 Before");
    Collectible1Total++;
    console.log(Collectible1Total + " Collecible 1 After");
})


LSPreOrderButton.addEventListener('click', function (e) {
    cart[1] = "Light Souls";
    console.log("LS Pre Order button pressed")
    console.log(Collectible2Total + " Collecible 2 Before");
    Collectible2Total++;
    console.log(Collectible2Total + " Collecible 2 After");
})

TORWAPreOrderButton.addEventListener('click', function (e) {
    cart[2] = "TORWA";
    console.log("TORWA Pre Order button pressed")
    console.log(Collectible3Total + " Collecible 3 Before");
    Collectible3Total++;
    console.log(Collectible3Total + " Collecible 3 After");
})

cartModalNav.addEventListener('click', function (e) {
    if (!cartModalPressed) {
        console.log("Modal has been pressed for the first time");
        cartModalPressed = true;



        cartBody.innerHTML += "<tr id='digCraftCartBody'>"
            + "<td>" + "Dig Craft" + "</td>"
            + "<td>(" + DCPlushPrice + ")</td>"
            + "<td><div class='input-group'>"
            + "<input type='number' class='item-count form-control' data-name='" + "Dig Craft" + "' id='inputQuantity1'" + "' value='" + Collectible1Total + "'>"
            + "</div></td>"
            + "<td>" + DCPlushClearButton + "</td>"
            + " = "
            + "<td>" + (Collectible1Total * DCPlushPrice) + "</td>"
            + "</tr>";

        cartBody.innerHTML += "<tr id='lightSpiritsCartBody'>"
            + "<td>" + "Light Spirits" + "</td>"
            + "<td>(" + LSPlushPrice + ")</td>"
            + "<td><div class='input-group'>"
            + "<input type='number' class='item-count form-control' data-name='" + "Light Spirits" + "id='inputQuantity2'" + "' value='" + Collectible2Total + "'>"
            + "</div></td>"
            + "<td><button class='delete-item btn btn-danger' id='LSClearButton' data-name=" + "Light Spirits" + ">X</button></td>"
            + " = "
            + "<td>" + (Collectible2Total * LSPlushPrice) + "</td>"
            + "</tr>";

        cartBody.innerHTML += "<tr id='TORWACartBody'>"
            + "<td>" + "Text of Responsibilty: WarArea" + "</td>"
            + "<td>(" + TORWAPlushPrice + ")</td>"
            + "<td><div class='input-group'>"
            + "<input type='number' class='item-count form-control' data-name='" + "Text of Responsibilty: WarArea" + "id='inputQuantity3'" + "' value='" + Collectible3Total + "'>"
            + "</div></td>"
            + "<td><button class='delete-item btn btn-danger' id='TORWAClearButton' data-name=" + "Text of Responsibilty: WarArea" + ">X</button></td>"
            + " = "
            + "<td>" + (Collectible3Total * TORWAPlushPrice) + "</td>"
            + "</tr>";

        //Getting each Products cart body
        let digCraftCartBody = document.getElementById("digCraftCartBody");
        let lightSpiritsCartBody = document.getElementById("lightSpiritsCartBody");
        let TORWACartBody = document.getElementById("TORWACartBody");
        digCraftCartBody.style.visibility = "hidden";
        lightSpiritsCartBody.style.visibility = "hidden";
        TORWACartBody.style.visibility = "hidden";
    }

    if (Collectible1Total != 0) {
        console.log("Collectible 1 total over 1");
        digCraftCartBody.style.visibility = "visible";
    }
    if (Collectible2Total != 0) {
        console.log("Collectible 2 total over 1");
        lightSpiritsCartBody.style.visibility = "visible";
    }
    if (Collectible3Total != 0) {
        console.log("Collectible 3 total over 1");
        TORWACartBody.style.visibility = "visible";
    }



})



//CheckOut Button
let orderButton = document.getElementById("OrderButton");
orderButton.addEventListener('click', function (e) {
    TotalFinalPrice.innerText = "Total price: $" + ((Collectible1Total * DCPlushPrice) + (Collectible2Total * LSPlushPrice) + (Collectible3Total * TORWAPlushPrice));
})