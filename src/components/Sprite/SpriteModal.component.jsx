import * as Styled from './Sprite.styles';

const SpriteModal = ({ image }) => {
  return (
    <Styled.SpriteModalWrapper>
      <Styled.SpriteModalImage src={image} alt="Pokemon image" />
    </Styled.SpriteModalWrapper>
  );
};

export default SpriteModal;
