import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p<{ color: string }>`
  margin: 0;

  color: ${({ color }) => color};
`;

function App() {
  return (
    <Container>
      <Text color="#587cf7">React</Text>
      <Text color="#d2fa64">Boiler</Text>
      <Text color="#ff6c45">plate</Text>
    </Container>
  );
}

export default App;
