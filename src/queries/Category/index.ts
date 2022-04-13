import { gql } from '@apollo/client';

const GET_CATEGORY = gql`
	query GetCategory {
		category {
			products {
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
						id
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
	}
`;

export default GET_CATEGORY;
