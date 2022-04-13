import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
	query GetProducts {
		product(id: "ps-5") {
			id
			name
			inStock
			gallery
			description
			category
			attributes {
				name
				type
				items {
					displayValue
					value
				}
			}
			prices {
				currency {
					label
					symbol
				}
				amount
			}
			brand
		}
	}
`;

export default GET_PRODUCTS;
