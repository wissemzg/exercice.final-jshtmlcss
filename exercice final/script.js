document.addEventListener("DOMContentLoaded", function () {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => displayApiItems(json.slice(0, 12)))
        .catch(error => console.error('Error fetching data:', error));
    function displayApiItems(data) {
        const apiItemsContainer = document.getElementById('apiItemsContainer');
        data.forEach(item => {
            const apiItem = document.createElement('div');
            apiItem.className = 'api-item';
            apiItem.style.width = '850px';
            apiItem.style.height = '1400px';
            apiItem.innerHTML = `
                <div class="image-container">
                    <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266044/Clothy/giywnwhsomoybyi9vgxj.png" alt="Rating" class="item-type"> 
                    <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/q1pbhfwzuy1u8xqq6cbd.png" alt="Rating" class="item-cart"> 
                    <div class="overlay-text">${item.category}</div>
                </div>
                <div class="item-image-container">
                    <img src="${item.image}" alt="${item.title}" class="item-image">
                </div>
                <div class="item-text-container">
                    <p class="item-title">${item.title}</p>
                    <hr class="item-divider">
                    <div class="item-details">
                        <p class="item-price">
                            <del>$${Math.floor(item.price)}</del>
                            $${Math.floor(item.price - (item.price * 20 / 100)).toFixed(2)}
                        </p>
                        <div class="item-rating-container">
                            <img src="https://res.cloudinary.com/dtrvdcebd/image/upload/v1708266043/Clothy/uhlym2mrhob6aoklzd0h.png" alt="Rating" class="item-rating">
                        </div>
                    </div>
                </div>
            `;

            apiItem.addEventListener('click', function () {
                // Redirect to the item details page with the item ID as a parameter
                window.location.href = `item-details.html?id=${item.id}`;
            });

            apiItemsContainer.appendChild(apiItem);
        });
    }
});
