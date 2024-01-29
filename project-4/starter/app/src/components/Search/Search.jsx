import styled from "styled-components";

export const Search = ({ setFilterData, data }) => {
  const handleInput = (e) => {
    let searchValue = e.target.value;

    console.log("useeffect started");

    if (searchValue !== "") {
      let filter = data.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("in the middle");
      setFilterData(filter);
      console.log("done");
    } else {
      setFilterData(data);
    }
  };
  return (
    <SearchDiv>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInput(e)}
      />
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  input {
    width: 284px;
    height: 40px;
    color: white;
    background-color: black;
    border-radius: 5px;
    border: 1px solid red;
    font-size: 18px;
    padding: 0px 15px;
  }
`;
