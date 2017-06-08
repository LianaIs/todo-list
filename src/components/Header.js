import React from 'react';
const header_style ={
  backgroundColor: '#ec7063',
	padding: '20px',
}

const Header = ({number}) => {
	return(
		<p style={header_style}>I have {number} items </p>
	);
}

export default Header;
