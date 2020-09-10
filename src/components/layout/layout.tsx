import React from 'react';
import { Container, Dropdown, Image, Menu, Segment } from 'semantic-ui-react';
import logo from '../../logo.svg';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
            Project Name
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>

          <Dropdown as={Menu.Item} position="right" item simple text="Dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
      <Segment basic style={{ paddingTop: '6rem' }}>
        {children}
      </Segment>
    </>
  );
};
