export default function addToCartAnonymous(product_id, quantity) {
    console.log(`Product ID: \${product_id}, Quantity: \${quantity}`);

    // Ensure quantity is an integer
    quantity = parseInt(quantity, 10);
    
    if (isNaN(quantity) || quantity < 0) {
        console.error('Quantity must be a positive integer');
        return;
    }

    // Retrieve the cart from localStorage or initialize an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (quantity == 0) {
        console.log('here 0')
        // Remove the product from the cart if quantity is 0
        cart = cart.filter(item => item.product_id != product_id);
    } else {
        
        // Check if the product already exists in the cart
        const productIndex = cart.findIndex(item => item.product_id == product_id);

        if (productIndex !== -1) {
            // Product exists, update the quantity
            cart[productIndex].quantity = quantity;
        } else {
            // Product doesn't exist, add it to the cart
            cart.push({ product_id, quantity });
        }
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log('Cart updated:', cart); // Debugging log
}
