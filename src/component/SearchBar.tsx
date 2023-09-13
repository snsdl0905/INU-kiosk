import {useState} from 'react';
import {styled} from 'styled-components';
const StyledDiv = styled.div`
`;

const StyledInput = styled.input`
    padding:10px 60px;
    font-size:1rem;
	max-width:300px;
`;

const StyledButton = styled.button`
    padding:6px 60px;
    font-size:20px;
    margin-left:10px;
	max-width:200px;
	background-color:#0B0B3B;
	color:white;
	border:1px solid black;
	border-radius:20px;
`;

export default function SearchBar() {
	const [searchMenu, setSearchMenu] = useState('');
	return (
		<StyledDiv>
			<StyledInput value={searchMenu} onChange={e => {
				setSearchMenu(e.target.value);
			}}></StyledInput>
			<StyledButton onClick={() => {
				setSearchMenu(' ');
			}}>검색</StyledButton>
		</StyledDiv>
	);
}
