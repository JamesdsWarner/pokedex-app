import * as Styled from "./Sprite.styles";

const Sprite = ({ image }) => {
  return (
    <Styled.SpriteWrapper>
      <Styled.SpriteImage src={image} />
    </Styled.SpriteWrapper>
  );
};

export default Sprite;
