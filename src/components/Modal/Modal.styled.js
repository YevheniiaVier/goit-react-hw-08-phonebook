import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 380px;
  max-width: 600px;
  width: 100%;
  padding: 12px;
  // background-color: #fff;
  background-image: linear-gradient(-225deg, rgba(56, 210, 210, .9) 50%, #E3FDF5 50%);
}
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  @media screen and (min-height: 10px) and (max-height: 500px) {
    top: 300px;
  }
`;
