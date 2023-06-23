let digCraft = document.getElementById("DigCraft");
console.log(digCraft.innerText);

let lightSpirits = document.getElementById("lightSpirits");
console.log(lightSpirits.innerText);

let TORWA = document.getElementById("T_O_R_W_A");
console.log(TORWA.innerText);

let DCButton = document.getElementById("DCButton");
console.log(DCButton);

let LSButton = document.getElementById("LSButton");
console.log(LSButton);

let TORWAButton = document.getElementById("TORWAButton");
console.log(TORWAButton);

//Order Now 
let orderButton = document.getElementById("OrderButton");

let totalFinalPrice = document.getElementById("totalFinalPrice");





let cartModal = document.getElementById("cart");

let cart = [];


let cartBody = document.getElementById("cartBody");




console.log("OG Setting Game Totals");
let Game1Total = 0;
let Game2Total = 0;
let Game3Total = 0;



//Prices
let digCraftPrice = 30.00;
let lightSpiritsPrice = 70.00;
let TORWAPrice = 60.00;



totalFinalPrice.innerText += 0;

let DCClearButton = "<button class='delete-item btn btn-danger' id='DCClearButton' data-name=" + "DigCraft" + ">X</button>";
let LSClearButton = "<button class='delete-item btn btn-danger' id='DCClearButton' data-name=" + "DigCraft" + ">X</button>";
let TORWAClearButton = "<button class='delete-item btn btn-danger' id='DCClearButton' data-name=" + "DigCraft" + ">X</button>";

cartBody.innerHTML += "<tr id='digCraftCartBody'>"
    + "<td>" + "Dig Craft" + "</td>"
    + "<td>(" + digCraftPrice + ")</td>"
    + "<td><div class='input-group'>"
    + "<input type='number' class='item-count form-control' data-name='" + "Dig Craft" + "id='inputQuantity1'" + "' value='" + 1 + "'>"
    + "</div></td>"
    + "<td>" + DCClearButton + "</td>"
    + " = "
    + "<td>" + (1 * digCraftPrice) + "</td>"
    + "</tr>";

cartBody.innerHTML += "<tr id='lightSpiritsCartBody'>"
    + "<td>" + "Light Spirits" + "</td>"
    + "<td>(" + lightSpiritsPrice + ")</td>"
    + "<td><div class='input-group'>"
    + "<input type='number' class='item-count form-control' data-name='" + "Light Spirits" + "id='inputQuantity2'" + "' value='" + 1 + "'>"
    + "</div></td>"
    + "<td><button class='delete-item btn btn-danger' id='LSClearButton' data-name=" + "Light Spirits" + ">X</button></td>"
    + " = "
    + "<td>" + (1 * lightSpiritsPrice) + "</td>"
    + "</tr>";

cartBody.innerHTML += "<tr id='TORWACartBody'>"
    + "<td>" + "Text of Responsibilty: WarArea" + "</td>"
    + "<td>(" + TORWAPrice + ")</td>"
    + "<td><div class='input-group'>"
    + "<input type='number' class='item-count form-control' data-name='" + "Text of Responsibilty: WarArea" + "id='inputQuantity3'" + "' value='" + 1 + "'>"
    + "</div></td>"
    + "<td><button class='delete-item btn btn-danger' id='TORWAClearButton' data-name=" + "Text of Responsibilty: WarArea" + ">X</button></td>"
    + " = "
    + "<td>" + (1 * TORWAPrice) + "</td>"
    + "</tr>";

let DCClear = document.getElementById("DCClearButton");
let digCraftCartBody = document.getElementById("digCraftCartBody");
digCraftCartBody.style.visibility = "hidden";
DCClear.addEventListener('click', function (e) {
    console.log("clear");
    digCraftCartBody.style.visibility = "hidden";
    console.log("resetting clear");
    console.log(Game1Total);
    Game1Total = 0;
    console.log(Game1Total);
    cart[0] = "";


})

let lightSpiritsCartBody = document.getElementById("lightSpiritsCartBody");
let lightSpiritsClear = document.getElementById("LSClearButton");
lightSpiritsCartBody.style.visibility = "hidden";

lightSpiritsClear.addEventListener('click', function (e) {
    console.log("clear");
    lightSpiritsCartBody.style.visibility = "hidden";
    Game2Total = 0;
    cart[1] = "";


})

let TORWACartBody = document.getElementById("TORWACartBody");
let TORWAClear = document.getElementById("TORWAClearButton");
TORWACartBody.style.visibility = "hidden";

TORWAClear.addEventListener('click', function (e) {
    console.log("clear");
    TORWACartBody.style.visibility = "hidden";
    Game3Total = 0;
    cart[2] = "";

})



//will be called by event listener on each button 
//if item is already in list just add to total number
//if item is new add to the modal 
function addToCart(item, cart) {

    console.log(cart);
    console.log("We in bby");
    //if the item is digCraft
    if (item == digCraft) {
        digCraftCartBody.style.visibility = "visible"

        if (cart.includes(item)) {
            console.log("DC was already in cart");
            console.log(Game1Total);
            Game1Total++;
            console.log(Game1Total);

        }
        else {
            cart[0] = digCraft;
            console.log("DC was not in cart before");
            console.log(Game1Total);
            Game1Total = 1;
            console.log(Game1Total);
        }
    }

    //if the item is lightSpirits
    if (item == lightSpirits) {

        lightSpiritsCartBody.style.visibility = "visible";

        //if item has already been added
        if (cart.includes(item)) {

            Game2Total++;

        }
        else {
            cart[1] = lightSpirits;
            Game2Total = 1;
        }

    }
    //if item is TORWA
    if (item == TORWA) {

        TORWACartBody.style.visibility = "visible";

        //if its already been added previously
        if (cart.includes(item)) {
            Game3Total++;

        }
        else {
            cart[2] = TORWA;
            Game3Total = 1;
        }
    }

}






//^^FUNCTIONS^^




//EVENT LISTENERS
DCButton.addEventListener("click", function (e) {
    addToCart(digCraft, cart);
})

LSButton.addEventListener("click", function (e) {
    addToCart(lightSpirits, cart);
})
TORWAButton.addEventListener("click", function (e) {
    addToCart(TORWA, cart);
})


orderButton.addEventListener('click', function (e) {
    console.log("completed order");
    if (digCraftCartBody.style.visibility == "hidden") {
        Game1Total = 0;
    }
    else {
        Game1Total = 1;
    }
    if (lightSpiritsCartBody.style.visibility == "hidden") {
        Game2Total = 0;
    }
    else {
        Game2Total = 1;
    }
    if (TORWACartBody.style.visibility == "hidden") {
        Game3Total = 0;
    }
    else {
        Game3Total = 1;
    }

    totalFinalPrice.innerText = "Total Price: $" + ((Game1Total * digCraftPrice) + (Game2Total * lightSpiritsPrice) + (Game3Total * TORWAPrice))
})




