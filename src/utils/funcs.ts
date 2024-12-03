export async function CreateOrder(body: any) {
	const response = await fetch("http://localhost:3001/order", {
		method: "POST",
		headers: {
			"Content-type": "Application/json",
		},
		body: JSON.stringify(body),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	} else if (!response.ok) {
		console.error(
			"some error occured while creating order",
			response.statusText
		);
	}
}
