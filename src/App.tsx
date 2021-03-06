import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Layout } from './components/layout/layout';
import { TodoList } from './components/todos/todoList';

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Container>
          <Header>It&#39;s a PWA!</Header>
          <TodoList />
        </Container>
      </Layout>
    </>
  );
};

export default App;
