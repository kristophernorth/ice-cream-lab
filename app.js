
// #region state
const iceCreams = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
]

const toppings = [
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Gummy Worms', price: 0.50, quantity: 0, type: 'topping' }
]

const vessels = [
  { name: 'Waffle Cone', price: 3.00, quantity: 0, type: 'vessel' },
  { name: 'Sprinkle Bowl', price: 7.00, quantity: 0, type: 'vessel' },
  { name: 'Cinnamon Roll Bowl', price: 19.00, quantity: 0, type: 'vessel' }
]
// #endregion


// NOTE - does js recognize plural version of singular? See iceCream vs iceCream
// #region logic
function orderVanilla() {
  const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
  vanilla.quantity++
  drawVanilla()
  drawTotal()
}

// function orderIceCream(name) {
//   const foundIceCream = iceCreams.find(iceCream => iceCream.name == name)
//   foundIceCream.quantity++
//   // drawVanilla
//   // drawTotal
// }

// function orderTopping(name) {
//   const foundTopping = toppings.find(topping => topping.name == name)
//   foundTopping.quantity++
//   drawCart
//   drawTotal
// }

// function orderVessel(name) {
//   const foundVessel = vessels.find(vessel => vessel.name == name)
//   foundVessel.quantity++
//   drawCart
//   drawTotal
// }
//#endregion


//#region graphic
function drawVanilla() {
  const vanilla = iceCreams.find(iceCream => iceCream.name == 'Vanilla')
  const cartItem = `
    <tr>
      <td>${vanilla.name}</td>
      <td>${vanilla.quantity}</td>
      <td>$${vanilla.price.toFixed(2)}</td>
      <td>$${(vanilla.price * vanilla.quantity).toFixed(2)}</td>
    <tr>`

  const cartElem = document.getElementById('cartItems')
  cartElem.innerHTML = cartItem
}

// function drawIceCreams() {

// }

// function drawToppings() {

// }

// function drawVessels() {

// }

// function drawCart() {
//   let cartContent = ''

//   for (let i = 0; i < iceCreams.length; i++) {
//     const iceCream = iceCreams[i];

//     if (iceCream.quantity == 0) {
//       continue
//     }

//     cartItemHTML = `
//       <tr>
//         <td>${iceCream.name}</td>
//         <td>${iceCream.quantity}</td>
//         <td>$${iceCream.price.toFixed(2)}</td>
//         <td>$${(iceCream.price * topping.quantity).toFixed(2)}</td>
//       <tr>
//     `
//     cartContent += cartItemHTML
//   }

function drawTotal() {
  let total = 0
  for (let i = 0; i < iceCreams.length; i++) {
    const iceCream = iceCreams[i]
    total += iceCream.quantity * iceCream.price
    // }
    // for (let i = 0; i < toppings.length; i++) {
    //   const topping = toppings[i]
    //   total += topping.quantity * topping.price
    // }

    // const vessel = vessels.find(vessel => vessel.quantity == 1)
    // if (vessel) {
    //   total += vessel.price * vessel.quantity
    // }

    const cartTotalElem = document.getElementById('cartTotal')
    cartTotalElem.innerText = `$${total.toFixed(2)}`
  }

  function checkout() {
    const wantsToCheckout = window.confirm('Are you sure that you are ready to check out?')

    if (wantsToCheckout == false) {
      return
    }

    for (let i = 0; i < iceCreams.length; i++) {
      const iceCream = iceCreams[i];
      iceCream.quantity = 0
    }

    // for (let i = 0; i < toppings.length; i++) {
    //   const topping = toppings[i];
    //   topping.quantity = 0
    // }

    // const vessel = vessels.find(vessel => vessel.quantity == 1)
    // if (vessel) {
    // //   vessel.quantity = 0
  }

  drawCart()
  drawTotal()
  window.alert("Enjoy your tasty treats, big dawg!")
}

//#endregion