function checkInstruction() {
       document.getElementById("instruction").innerHTML = `
       <div class="container p-5 mt-3 bg-light text-dark rounded-3">
       <h2>INSTRUCTIONS</h2>
       <p>Instructions for Paying Fare in MRT (Yapping Guide)

Step 1: Go to the station entrance 🚶‍♂️
Walk to the MRT station near you and head to the entrance where the security guard and bag inspection are.

Step 2: Pass the security check 🔍
Put your bag on the table for inspection and walk through the entrance area.

Step 3: Go to the ticket booth or machine 🎟️
Look for the ticket counter or the ticket vending machine.

Step 4: Tell the cashier your destination 🗣️
If you're buying from the counter, say where you're going.
Example: “One ticket to North Avenue please.”

Step 5: Pay the fare 💸
Give the money to the cashier. They will give you a single-journey ticket or you can load a stored-value card.

Step 6: Get your ticket or card 🪪
Take your ticket and keep it safe because you’ll need it to enter and exit the station.

Step 7: Tap or insert the ticket at the gate 🚧
Go to the turnstile and tap or insert your ticket/card. The gate will open so you can pass.

Step 8: Go to the platform 🚉
Follow the signs and wait for the train on the correct side.</p>
       </div>
       `;
}

function checkDiscount(){
    let budget = document.getElementById("budget").value;
    let discount = budget * 0.2;

    document.getElementById("discount").innerHTML = `
       <h3>FARE: <span id="discount" class="boxed">${discount}</span></h3>
  
       `
}


