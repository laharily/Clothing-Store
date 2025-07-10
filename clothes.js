
let shirts = [
        ["GreenShirt.png", "BrownShirt.png"],
        ["BlueShirt.png", "BlackShirt.png"],
        ["WhiteShirt.png", "YellowShirt.png"],
        ["RedShirt.png", "PurpleShirt.png"]
];

let shirtNames = [
        ["Mint Nike T-Shirt", "Comfy Sweatshirt"],
        ["Blue Sweater", "Fire NASA Shirt"],
        ["White Spring Tank", "Summer Dress Shirt"],
        ["Red Nike Sweater", "Purple T-Shirt"],
];

let shirtPrices = [
        [19.99, 40.00],
        [30.00, 13.99],
        [20.00, 45.65],
        [25.99, 17.99]
];

let pants = [
        ["GreenPant.png", "BrownPant.png"],
        ["BluePant.png", "PurplePant.png"],
        ["TealPant.png", "BeigePant.png"],
        ["WhitePant.png", "BlackPant.png"]
];

let pantNames = [
        ["Dress Pants", "Loose Worker Pants"],
        ["Ripped Jeans", "Indigo Sweats"],
        ["Savage PJ's", "Cargo Pants"],
        ["Linen Pants", "Black Cargo Pants"]
];

let pantPrices = [
        [45.75, 41.25],
        [15.99, 27.00],
        [25.00, 25.00],
        [54.45, 25.00]
];

let shoes = [
        ["PinkShoe.png", "RedShoe.png"],
        ["BlueShoe.png", "GreenShoe.png"],
        ["WhiteShoe.png", "BlackShoe.png"],
        ["BeigeShoe.png", "GrayShoe.png"],
];

let shoeNames = [
        ["Pink Sneakers", "Red Converse"],
        ["Blue Nike Dunks", "Green Converse"],
        ["Gucci Shoes", "Doc Martins"],
        ["Shark Slides", "Fire Kicks"],
];

let shoePrices = [
        [75.51, 50.00],
        [99.99, 65.99],
        [150.00, 65.75],
        [25.00, 89.00]
];

let accessories = [
        ["MetallicAccessory.png", "SilverAccessory.png"],
        ["BrownAccessory.png", "GreenAccessory.png"],
        ["WhiteAccessory.png", "BlackAccessory.png"],
        ["BeigeAccessory.png", "PinkAccessory.png"]
];

let accessoryNames = [
        ["Silver Belt", "Black Watch"],
        ["Ray Bans", "New York Hat"],
        ["Apple Headphones", "Fanny Pack"],
        ["Reindeer Antlers", "2-Set Beanies"]
];

let accessoryPrices = [
        [21.95, 35.99],
        [79.99, 16.99],
        [100.00, 10.99],
        [15.25, 9.99]
];

function goToNextPage(nextPage)
{
        window.location.href = nextPage;
        location.replace(nextPage);
}

function addShirtToCart(index)
{
        let place = localStorage.getItem("shirt" + (index+1));
        if (localStorage.getItem("cart") == null) {
                localStorage.setItem("cart", shirts[index][place]);
        }
        else {
                let items = localStorage.getItem("cart");
                items += "_";
                items += shirts[index][place];
                localStorage.setItem("cart", items);
        }

        if (localStorage.getItem("cost") == 0) {
                localStorage.setItem("cost", shirtPrices[index][place]);
        }
        else {
                let cost = parseFloat(localStorage.getItem("cost")); //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_parseint 
                cost += shirtPrices[index][place];
                cost = cost.toFixed(2); //bobbyhadz.com
                localStorage.setItem("cost", cost);
        }
}

function addPantToCart(index)
{
        let place = localStorage.getItem("pant" + (index+1));
        if (localStorage.getItem("cart") == null) {
                localStorage.setItem("cart", pants[index][place]);
        }
        else {
                let items = localStorage.getItem("cart");
                items += "_";
                items += pants[index][place];
                localStorage.setItem("cart", items);
        }

        if (localStorage.getItem("cost") == 0) {
                localStorage.setItem("cost", pantPrices[index][place]);
        }
        else {
                let cost = parseFloat(localStorage.getItem("cost")); 
                cost += pantPrices[index][place];
                cost = cost.toFixed(2);
                localStorage.setItem("cost", cost);
        }
}

function addShoeToCart(index)
{
        let place = localStorage.getItem("shoe" + (index+1));
        if (localStorage.getItem("cart") == null) {
                localStorage.setItem("cart", shoes[index][place]);
        }
        else {
                let items = localStorage.getItem("cart");
                items += "_";
                items += shoes[index][place];
                localStorage.setItem("cart", items);
        }

        if (localStorage.getItem("cost") == 0) {
                localStorage.setItem("cost", shoePrices[index][place]);
        }
        else {
                let cost = parseFloat(localStorage.getItem("cost")); 
                cost += shoePrices[index][place];
                cost = cost.toFixed(2);
                localStorage.setItem("cost", cost);
        }
}

function addAccessoryToCart(index)
{
        let place = localStorage.getItem("accessory" + (index+1));
        if (localStorage.getItem("cart") == null) {
                localStorage.setItem("cart", accessories[index][place]);
        }
        else {
                let items = localStorage.getItem("cart");
                items += "_";
                items += accessories[index][place];
                localStorage.setItem("cart", items);
        }

        if (localStorage.getItem("cost") == 0) {
                localStorage.setItem("cost", accessoryPrices[index][place]);
        }
        else {
                let cost = parseFloat(localStorage.getItem("cost")); 
                cost += accessoryPrices[index][place];
                cost = cost.toFixed(2);
                localStorage.setItem("cost", cost);
        }
}

function showCart() {
        
        let items = localStorage.getItem("cart");
        let cart = items.split("_"); 
        if (cart.length > 1) {
                let cost = localStorage.getItem("cost");
                let str = '<b> Total Cost: $' + cost + "<b> <br>";
                document.write(str);
        }
        for (let i = 1; i < cart.length; i++) {
                let str = "<img id = 'item1' src = '" + cart[i] + "' alt = 'SomePic' style='width:260px; height:300px;'> </img>";
                document.write(str);
        }
}

function checkout() {
	let items = localStorage.getItem("cart");
        let cart = items.split("_"); 
        if (cart.length > 1) {
		goToNextPage('checkOut.html');
	} 
	else {
		alert("Your cart is empty. Please select items before checking out"); 
	}
}

function resetCart() {
        localStorage.setItem("cart", "");
        localStorage.setItem("cost", "0");
        alert("Are you sure you want to reset your cart?");
	let str = "<b> Total Cost: $0 <b> <br>";
        document.getElementById("cart_bodyp").innerHTML=str;

}

function showOrder() {
	//clear the cart
	localStorage.setItem("cart", "");
        localStorage.setItem("cost", "0");
        event.preventDefault(); //stackoverflow.com
        let nameInput = document.getElementById("name").value; //learningaboutelectronics.com
        let addressInput = document.getElementById("address").value;
        let creditcardInput = document.getElementById("creditcard").value;
        let element1  = document.getElementById("form");
        let element2 = document.getElementById("checkoutfooter");
        element1.remove(); //w3schools
        element2.remove();
         let str = "THANK YOU " + nameInput + " FOR SHOPPING WITH US! <br> Order Confirmation #: CSPRME204 <br> "
                + "Your order will be shipped to: " + addressInput + 
                " <br> Come back next time! <br>";
        let functionStr = "showHome()";
	 str += "<br><button id='checkoutbtn' onclick='" + functionStr + "'>Continue Shopping</button><br>";
	document.getElementById("checkoutp").innerHTML=str;

}
function showHome() {
        goToNextPage("index.html");
}

//code concept taken from stackoverflow.com//
document.addEventListener("DOMContentLoaded", _ => {

        let randomNum = Math.floor(Math.random()*shirts[0].length);
	if (document.getElementById("Shirt1") != null) {
        	document.getElementById("Shirt1").src = shirts[0][randomNum]; 
        	document.getElementById("shirt1n").innerHTML = shirtNames[0][randomNum];
        	document.getElementById("shirt1p").innerHTML = "$" + shirtPrices[0][randomNum];
        	localStorage.setItem("shirt1", randomNum);
	}

        randomNum = Math.floor(Math.random()*shirts[1].length);
	if (document.getElementById("Shirt2") != null) {
        	document.getElementById("Shirt2").src = shirts[1][randomNum];
        	document.getElementById("shirt2n").innerHTML = shirtNames[1][randomNum];
        	document.getElementById("shirt2p").innerHTML =  "$" + shirtPrices[1][randomNum];
        	localStorage.setItem("shirt2", randomNum);
	}

        randomNum = Math.floor(Math.random()*shirts[2].length);
        if (document.getElementById("Shirt3") != null) {
		document.getElementById("Shirt3").src = shirts[2][randomNum];
        	document.getElementById("shirt3n").innerHTML = shirtNames[2][randomNum];
        	document.getElementById("shirt3p").innerHTML =  "$" + shirtPrices[2][randomNum];
        	localStorage.setItem("shirt3", randomNum);
	}

        randomNum = Math.floor(Math.random()*shirts[3].length);
	 if (document.getElementById("Shirt4") != null) {
        	document.getElementById("Shirt4").src = shirts[3][randomNum];
        	document.getElementById("shirt4n").innerHTML = shirtNames[3][randomNum];
        	document.getElementById("shirt4p").innerHTML =  "$" + shirtPrices[3][randomNum];
        	localStorage.setItem("shirt4", randomNum);
	}

});

document.addEventListener("DOMContentLoaded", _ => {
        let randomNum = Math.floor(Math.random()*pants[0].length);
	if (document.getElementById("Pant1") != null) {
        	document.getElementById("Pant1").src = pants[0][randomNum];
        	document.getElementById("pant1n").innerHTML = pantNames[0][randomNum];
        	document.getElementById("pant1p").innerHTML =  "$" + pantPrices[0][randomNum];
        	localStorage.setItem("pant1", randomNum);
	}

        randomNum = Math.floor(Math.random()*pants[1].length);
        if (document.getElementById("Pant2") != null) {
		document.getElementById("Pant2").src = pants[1][randomNum];
        	document.getElementById("pant2n").innerHTML = pantNames[1][randomNum];
        	document.getElementById("pant2p").innerHTML =  "$" + pantPrices[1][randomNum];
        	localStorage.setItem("pant2", randomNum);
	}

        randomNum = Math.floor(Math.random()*pants[2].length);
         if (document.getElementById("Pant3") != null) {
		document.getElementById("Pant3").src = pants[2][randomNum];
       	 	document.getElementById("pant3n").innerHTML = pantNames[2][randomNum];
        	document.getElementById("pant3p").innerHTML =  "$" + pantPrices[2][randomNum];
        	localStorage.setItem("pant3", randomNum);
	}

        randomNum = Math.floor(Math.random()*pants[3].length);
	if (document.getElementById("Pant4") != null) {
        	document.getElementById("Pant4").src = pants[3][randomNum];
        	document.getElementById("pant4n").innerHTML = pantNames[3][randomNum];
        	document.getElementById("pant4p").innerHTML =  "$" + pantPrices[3][randomNum];
        	localStorage.setItem("pant4", randomNum);
	}
});

document.addEventListener("DOMContentLoaded", _ => {

        let randomNum = Math.floor(Math.random()*shoes[0].length);
	if (document.getElementById("Shoe1") != null) {
        	document.getElementById("Shoe1").src = shoes[0][randomNum];
        	document.getElementById("shoe1n").innerHTML = shoeNames[0][randomNum];
        	document.getElementById("shoe1p").innerHTML =  "$" + shoePrices[0][randomNum];
        	localStorage.setItem("shoe1", randomNum);
	}

        randomNum = Math.floor(Math.random()*shoes[1].length);
	if (document.getElementById("Shoe2") != null) {
        	document.getElementById("Shoe2").src = shoes[1][randomNum];
        	document.getElementById("shoe2n").innerHTML = shoeNames[1][randomNum];
        	document.getElementById("shoe2p").innerHTML =  "$" + shoePrices[1][randomNum];
        	localStorage.setItem("shoe2", randomNum);
	}

        randomNum = Math.floor(Math.random()*shoes[2].length);
	if (document.getElementById("Shoe3") != null) {
        	document.getElementById("Shoe3").src = shoes[2][randomNum];
        	document.getElementById("shoe3n").innerHTML = shoeNames[2][randomNum];
        	document.getElementById("shoe3p").innerHTML =  "$" + shoePrices[2][randomNum];
        	localStorage.setItem("shoe3", randomNum);
	}

        randomNum = Math.floor(Math.random()*shoes[3].length);
	if (document.getElementById("Shoe4") != null) {
        	document.getElementById("Shoe4").src = shoes[3][randomNum];
        	document.getElementById("shoe4n").innerHTML = shoeNames[3][randomNum];
        	document.getElementById("shoe4p").innerHTML =  "$" + shoePrices[3][randomNum];
        	localStorage.setItem("shoe4", randomNum);
	}
});

document.addEventListener("DOMContentLoaded", _ => {
        let randomNum = Math.floor(Math.random()*accessories[0].length);
	if (document.getElementById("Accessory1") != null) {
        	document.getElementById("Accessory1").src = accessories[0][randomNum];
        	document.getElementById("accessory1n").innerHTML = accessoryNames[0][randomNum];
        	document.getElementById("accessory1p").innerHTML =  "$" + accessoryPrices[0][randomNum];
        	localStorage.setItem("accessory1", randomNum);
	}

        randomNum = Math.floor(Math.random()*accessories[1].length);
	if (document.getElementById("Accessory2") != null) {
        	document.getElementById("Accessory2").src = accessories[1][randomNum];
        	document.getElementById("accessory2n").innerHTML = accessoryNames[1][randomNum];
        	document.getElementById("accessory2p").innerHTML =  "$" + accessoryPrices[1][randomNum];
        	localStorage.setItem("accessory2", randomNum);
	}

        randomNum = Math.floor(Math.random()*accessories[2].length);
	if (document.getElementById("Accessory3") != null) {
        	document.getElementById("Accessory3").src = accessories[2][randomNum];
        	document.getElementById("accessory3n").innerHTML = accessoryNames[2][randomNum];
        	document.getElementById("accessory3p").innerHTML =  "$" + accessoryPrices[2][randomNum];
        	localStorage.setItem("accessory3", randomNum);
	}

        randomNum = Math.floor(Math.random()*accessories[3].length);
	if (document.getElementById("Accessory4") != null) {
        	document.getElementById("Accessory4").src = accessories[3][randomNum];
        	document.getElementById("accessory4n").innerHTML = accessoryNames[3][randomNum];
        	document.getElementById("accessory4p").innerHTML =  "$" + accessoryPrices[3][randomNum];
        	localStorage.setItem("accessory4", randomNum);
	}
});

