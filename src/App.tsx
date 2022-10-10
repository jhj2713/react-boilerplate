import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Text>React Boilerplate</Text>
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;

  color: #587cf7;
`;
