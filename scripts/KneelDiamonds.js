import { Metals, currentMetalOnOrder } from "./Metals.js";
import { DiamondSizes, currentSizeOnOrder } from "./DiamondSizes.js";
import { JewelryStyles, currentStyleOnOrder } from "./JewelryStyles.js";
import { Orders } from "./Orders.js";
import { addCustomOrder} from "./database.js";
import { DiamondStyle, currentJewelryTypeOnOrder } from "./typeOfJewelry.js"


document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    addCustomOrder();
  }
});



export const KneelDiamonds = () => {
  return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article class="jewelryStyles">
        ${DiamondStyle()}
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>

        </article>

        <article>
            <h2>Current Order</h2>
           ${currentMetalOnOrder()}
           ${currentSizeOnOrder()}
           ${currentStyleOnOrder()}
           ${currentJewelryTypeOnOrder()}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `;
};
