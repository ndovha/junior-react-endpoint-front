import { gql } from '@apollo/client';

const GET_CURRENCY = gql`
	query GetCurrency {
		currencies {
			label
			symbol
		}
	}
`;

export default GET_CURRENCY;
