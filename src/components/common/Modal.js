import React from "react";
import styled, { css } from "styled-components";
import { color } from "../../theme";

// TODO windows size[https://spi.maps.daum.net/postcode/guidessl#attributes]

const openStyles = css`
  ${(props) =>
    props.open &&
    css`
      display: flex;
      align-items: center;
    `}
`;

const ModalView = styled.section`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);

  ${openStyles};

  display: flex;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    max-height: 100vh;
    padding: 10px;
    background-color: ${color.WHITE};
    overflow: hidden;

    main {
      padding: 5px;
      text-align: center;
    }

    footer {
      text-align: right;
    }
  }
`;

const CloseButton = styled.button`
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 56px;
  border: 0;
  border-top: 1px solid ${color.T_BORDER_BUTTON};
  border-radius: 0 0 4px 4px;
  background-color: ${color.WHITE};
  font-weight: 600;
  font-size: 16px;
  color: ${color.PURPLE};
  line-height: 58px;
  text-align: center;
  outline: none;
  cursor: pointer;
`;

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <>
      {open ? (
        <ModalView>
          <section>
            <header>{header}</header>
            <main>{props.children}</main>
            <footer>
              <CloseButton onClick={close}>닫기</CloseButton>
            </footer>
          </section>
        </ModalView>
      ) : null}
    </>
  );
};

export default Modal;
