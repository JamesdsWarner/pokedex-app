import * as Styled from "./HeaderImage.styled";

const HeaderImage = () => {
  return (
    <Styled.HeaderImageWrapper>
      <Styled.HeaderImage
        alt="Pokedex logo"
        src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png"
      />
    </Styled.HeaderImageWrapper>
  );
};

export default HeaderImage;
