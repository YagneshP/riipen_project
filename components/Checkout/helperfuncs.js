import { commerce } from "../../lib/commerce";

const generateCheckoutToken = async () => {
	const cartId= commerce.cart.id();
	console.log("cartid", cartId);
	if (cartId) {
		const token = await commerce.checkout.generateToken(cartId, {
			type: 'cart',
		});
		console.log("token",token);
		// setToken(token);
		// fetchShippingCountries();
	// } else {
	// 	Router.push('/cart');
	// }
}

export default generateCheckoutToken