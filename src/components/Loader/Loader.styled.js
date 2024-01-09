import styled from "styled-components";
export const LoaderCircle = styled.div`
position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:150px;
  height:150px;
  background:#ccc;
  border:5px solid #fff;
  box-shadow:0 0 0 5px #4973ff;
  border-radius:50%;
  overflow:hidden;
`
export const LoaderWave = styled.div`
position:relative;
  width:100%;
  height:100%;
  background:#4973ff;
  border-radius:50%;
  box-shadow:inset 0 0 50px rgba(0,0,0,.5);
  &::before,
  &::after {
    content:'';
  position:absolute;
  width:200%;
  height:200%;
  top:0;
  left:50%;
  transform:translate(-50%,-75%);
  background:#000;
  }
  &::before {
    border-radius:45%;
  background:rgba(255,255,255,1);
  animation:animate 5s linear infinite;
  }
  &::after {
    border-radius:40%;
  background:rgba(255,255,255,.5);
  animation:animate 10s linear infinite;
  }
  @keyframes animate{
  0%{
     transform:translate(-50%,-75%) rotate(0deg);
  }
  100%{
     transform:translate(-50%,-75%) rotate(360deg);
  }
}
`