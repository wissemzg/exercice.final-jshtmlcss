document.addEventListener("DOMContentLoaded", function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    
    fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then(res => res.json())
        .then(item => displayItemDetails(item))
        .catch(error => console.error('Error fetching item details:', error));

    function displayItemDetails(item) {
        const itemDetailsContainer = document.getElementById('itemDetailsContainer');

       
        const itemDetailsHTML = `
        
            <div class="item-details-image-container">
                <img src="${item.image}" alt="${item.title}" class="item-details-image">
            </div>
            <div class="lkbira"></div>
            <div class="item-details-text">
            <p class="item-title2">${item.title}</p>
            <div class="item-rating-container">
                    <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png" alt="Rating" class="item-rating">
                </div>
                <p class="item-price">
                <del>$${Math.floor(item.price)}</del>
                $${Math.floor(item.price - (item.price * 20 / 100)).toFixed(2)}
            </p>
                <p class="item-desc"> ${item.description}</p>
                
                <div class="add-to-cart-container">
                <p class="item-title">Quantity:</p>
                <input class='quantity_Input' type="number" id="quantityInput" value="1" min="1" max="10">
                    <button class="add-to-cart-button" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
                <div class="bttns">
                <button class="btton1" >Product Description</button>
                <button class="btton2" >Additional Info</button>
                <p class="txt">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health,<br> ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple <br> sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                </div>
            </div>
            </div>

        `;

        itemDetailsContainer.innerHTML = itemDetailsHTML;
    }
});

