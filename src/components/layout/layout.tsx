import React from 'react';
import { Container, Image, Menu, Segment } from 'semantic-ui-react';
import { LoginForm } from '../../components/loginForm/loginForm';
import { useAuth } from '../../customHooks/useAuth';
import logo from '../../logo.svg';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { isAuthenticated, loading, currentUser, logout } = useAuth();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  console.log('isAuthenticated: ', isAuthenticated);
  console.log('currentUser: ', currentUser);

  return (
    <>
      <Menu fixed="top" inverted borderless>
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
            Todo App
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>

          <Menu.Item as="a" position="right" onClick={isAuthenticated ? logout : openModal}>
            {isAuthenticated ? 'Log out' : 'Log in'}
          </Menu.Item>
        </Container>
      </Menu>
      <Segment basic style={{ paddingTop: '6rem' }} vertical loading={loading}>
        {children}
      </Segment>
      <LoginForm isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
    </>
  );
};
