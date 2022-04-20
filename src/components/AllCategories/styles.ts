import styled from 'styled-components';
import { colors } from 'styles/colors';

export const Wrapper = styled.div`
	width: 85%;
	margin: 0 auto;
`;

export const WrapperCards = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin: 0 auto;
	align-items: center;
`;

export const BtnCart = styled.button`
	position: absolute;
	opacity: 0;
	z-index: 2;
	width: 52px;
	height: 52px;
	background-color: ${colors.desingColor};
	border-radius: 50%;
	top: 72%;
	right: 31px;
	cursor: pointer;
	align-items: center;
	box-shadow: 0px 4px 11px ${colors.shadowBtnColor};
`;

export const Card = styled.div`
	position: relative;
	margin-top: 103px;
	margin-right: 35px;
	width: 370px;
	height: 430px;
	padding: 16px;
	&:hover,
	&:hover ${BtnCart} {
		box-shadow: 0px 4px 35px ${colors.shadowColor};
		opacity: 1;
	}
`;

export const Image = styled.img`
	width: 350px;
	height: 330px;
	object-fit: contain;
	z-index: 1;
`;

export const Title = styled.p`
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	line-height: 28.8px;
`;

export const Price = styled.p`
	font-weight: 500;
	font-size: 18px;
	line-height: 28.8px;
`;
