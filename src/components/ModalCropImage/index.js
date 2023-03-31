import React, { useState }  from 'react';
import ReactCrop from 'react-image-crop';

import { Container, Title, Button, ButtonContainer, ModalContainer } from './styles';
import 'react-image-crop/dist/ReactCrop.css';

function ModalCropImage ({
  onClose,
  onComplete,
  onConfirm,
  src,
}) {
  const [ crop, setCrop ] = useState({
    unit: '%',
    x: 25,
    y: 25,
    width: 0,
    height: 0,
  });
  const [ error, setError ] = useState(false);

  const handleOnConfirm = () => {
    if (!crop.width || !crop.height)
      return setError(true);
    setError(false);
    onConfirm(crop);
  }

  return (
    <>
      <ModalContainer />
      <Container>
        <Title>Selecione a área desejada da imagem:</Title>
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(crop) => onComplete && onComplete(crop)}
          maxWidth={760}
          minWidth={150}
          minHeight={150}
        >
          <img src={src} alt='Document to Crop' />
        </ReactCrop>
        {/* {
            error && (
                <MessageBox theme="error">
                    <InfoCircleFilled />
                    * Selecione alguma área da imagem antes de continuar.
                </MessageBox>
            )
        } */}
        <ButtonContainer>
          <Button close onClick={onClose}> Fechar </Button>
          <Button onClick={handleOnConfirm}> Confirmar </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}

export default ModalCropImage;
