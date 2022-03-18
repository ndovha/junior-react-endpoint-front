import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'styles/colors';

export const WrapperHeader = styled.div`
	position: sticky;
	top: 0;
	min-height: 80px;
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderLinks = styled.div`
	display: flex;
`;

export const Links = styled.li`
	display: inline-block;
	font-size: 16px;
	line-height: 19.2px;
	text-transform: uppercase;
	padding: 0px 16px;
	text-decoration: none;
`;

export const UrlLink = styled(Link)`
	text-decoration: none;
	color: ${colors.textColor};
`;

export const WrapperCart = styled.div`
	display: flex;
`;
