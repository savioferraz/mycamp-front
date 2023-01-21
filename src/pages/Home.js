import styled from 'styled-components';

export default function Home() {
  return (
    <Wraper>
      <h1>MyCamp</h1>
    </Wraper>
  );
}

const Wraper = styled.div`
  background-color: #ffffff;
  width: 800px;
  height: 800px;
  border-radius: 8px;

  h1 {
    font-size: 22px;
  }
`;
