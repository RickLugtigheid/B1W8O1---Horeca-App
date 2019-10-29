var drinkAmmount;
var orders = [""];

var totalPrize = 0;

function addDrink(drinkName, prize){

        drinkAmmount = prompt("Hoeveel " + drinkName + " wilt U toevoegen aan uw bestelling?");
        drinkAmmount = parseFloat(drinkAmmount);
        if(drinkAmmount != null){
            addOrder(drinkName, drinkAmmount);
        }else{
            alert("ERROR: uw invoer was incorrect!\n Voer een cijfer in.")
        }
}

function addOrder(orderName, orderAmmount, prize){
    var prize;
    if(orderName == "bier"){
        prize = 2.50 * orderAmmount;
    }else if(orderName == "sBier"){

    }else if(orderName == "wijn"){
        prize = 3.00 * orderAmmount;
    }else if(orderName == "fris"){
        prize = 2.00 * orderAmmount;
    }
    orders.push("Naam: " + orderName + "<br> Hoeveelheid: " + orderAmmount + "<br> Prijs: $" + prize +"<br><br>");//€
    totalPrize += prize;

    updateOrder();

    console.log("NEW ORDER -> naam: " + orderName + " Hoeveelheid: " + orderAmmount);
}

function deleteOrder(){
    var orderToDelete = prompt("Welke bestelling wilt U verwijderen? \n Type het nummer van de bestelling in, dus voor de 3de bestelling typ een 3");

    delete orders[orderToDelete];
    updateOrder();
}

function updateOrder(){
    document.getElementById("ORDER_LIST").innerHTML = "";
    document.getElementById("TOTAL_PRIZE").innerHTML = "Totaal prijs: $" + totalPrize;

    for(var i = 0; i <= (orders.length - 1); i++){
        document.getElementById("ORDER_LIST").innerHTML += orders[i];
    }
}