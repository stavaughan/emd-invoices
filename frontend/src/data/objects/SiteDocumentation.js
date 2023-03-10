const SiteDocumentation = {
	invoices: {
		forms: {
			bulkInvoices: {
				title: "Bulk Invoices",
				description: "Create multiple invoices at once. Copy and paste text from a document or email and paste it into the text box below. The text will be parsed and converted into invoices.",
				infoButton: "Formatting your text",
				formattingList: [
					"Each line should contain an uppercase prefix, unique number, description, price and quantity.",
					"Space between customer prefix and unique number.",
					"Each price should have a '$' in front of it.",
					"If more than 1 of the same item, place a space and the quantity number directly after the price."
				],
				sampleText: `V 258 Three Rd Dias Antique Ring $220.00 2\nV 259 Leaves Flowers Bands 4862 $220.00\nV 260 Italian Flag Spanogletti Rings 4856 $380.00\nV 261 Radiant Dias Wed Band 4808 $120.00`,
				structureText: `[CP] [UN] [Description] $[Price] [Quantity]`,
				instructions: [
					{
						id: "CP",
						text: "Customer Prefix. This is a unique 1-2 letter identifier for each customer. Selected when creating a customer. Example: 'V'. Place a space after the last character."
					},
					{
						id: "UN",
						text: "Unique Number. This is a 3-4 character number, unique to each customer. This number will be combined with the Customer Prefix. Example: 258. Place a space after the last character."
					},
					{
						id: "Description",
						text: "Description of the product or service. Example: Three Rd Dias Antique Ring. Place a space after the last character."
					},
					{
						id: "Price",
						text: "The unit price of the item. This should be a number with a '$' in front of it. Example: $220.00. Place a space after the last character only if the quantity is greater than 1."
					},
					{
						id: "Quantity",
						text: "The quantity of the item (number only), No space after."
					}
				],
				textCopy: {
					title: "How to Format"
				}
			}
		}
	}
};

export default SiteDocumentation;
