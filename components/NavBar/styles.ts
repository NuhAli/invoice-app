import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 72px;
  background: #373b53;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  background: #7c5dfa;
  border-radius: 0px 20px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logoinner = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 72px;
  height: 72px;
  background: #9277ff;
  border-radius: 0px 20px 20px 0px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 24px;
  border-left: 1px solid #494e6e;
`;

export const IconContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  margin-left: auto;
  cursor: pointer;
`;