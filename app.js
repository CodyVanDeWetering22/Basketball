let clickUpgrades = [
    {
        name: 'Three Pointer',
        price: 100,
        quantity: 0,
        multiplier: 3
    },

    {
        name: 'Dribble',
        price: 300,
        quantity: 0,
        multiplier: 5
    },

];

let automaticUpgrades = [
    {
        name: 'Timeout',
        price: 1000,
        quantity: 0,
        multiplier: 20
    },

    {
        name: 'LeBron',
        price: 23000,
        quantity: 0,
        multiplier: 23
    }
];

let basketballAmount = 1000000;

let click = 1;

let automatic = 0;






function mine() {

    basketballAmount += click

    clickUpgrades.forEach(clickUpgrade => {
        if (clickUpgrade.quantity > 0) {
            const upgradeTotal = (clickUpgrade.multiplier * clickUpgrade.quantity)
            console.log(click)
        }

        drawBasketball()
    })




}

function drawBasketball() {
    const basketballElement = document.getElementById('Basketball')
    basketballElement.innerText = basketballAmount


}

function buyThreePointer() {
    const threePointer = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Three Pointer')

    if (basketballAmount >= threePointer.price) {
        threePointer.quantity++
        basketballAmount -= threePointer.price
        threePointer.multiplier++
        click += threePointer.multiplier
        console.log('threepointer bought');

        threePointer.price += 100

        drawBasketball()
        drawClickPower()
    }
    console.log(threePointer);

}
function buyDribble() {
    const Dribble = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'Dribble')

    if (basketballAmount >= Dribble.price) {
        Dribble.quantity++
        basketballAmount -= Dribble.price
        Dribble.multiplier++
        click += Dribble.multiplier
        console.log('dribble bought');

        Dribble.price += 200

        drawBasketball()
        drawClickPower()

    }
    console.log(Dribble);

}

function buyTimeout() {
    const timeout = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'Timeout')

    if (basketballAmount >= timeout.price) {
        timeout.quantity++
        basketballAmount -= timeout.price
        timeout.multiplier++
        automatic += timeout.multiplier
        console.log("bought timeout");

        timeout.price += 1000
        drawBasketball()
    }
    console.log(timeout);
}

function buyLebron() {
    const LeBron = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'LeBron')

    if (basketballAmount >= LeBron.price) {
        LeBron.quantity++
        basketballAmount -= LeBron.price
        LeBron.multiplier++
        automatic += LeBron.multiplier
        console.log("bought lebron");
        LeBron.price += 10000
        drawBasketball()
        drawAutoPower()
    }
    console.log(LeBron);
}



function collectAutoUpgrades() {
    automaticUpgrades.forEach(Upgrade => {
        automatic += Upgrade.quantity * Upgrade.multiplier
    })
    basketballAmount += automatic
    drawBasketball()

}

function drawClickPower() {
    const clickElement = document.getElementById('clickAmount')
    clickElement.innerText == click
    console.log(clickElement);
}

function drawAutoPower() {
    const automaticElement = document.getElementById('auto')
    automaticElement == click

    console.log(automaticElement)
}

console.log(click);
drawAutoPower()

drawClickPower()

drawBasketball()

setInterval(collectAutoUpgrades, 3000)