import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button, Modal, Header } from 'semantic-ui-react';
import { auth } from '../../firebase/index';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID, auth.GithubAuthProvider.PROVIDER_ID],
};

interface Props {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const LoginForm: React.FC<Props> = ({ isOpen, openModal, closeModal }) => {
  return (
    <>
      <Modal size="mini" centered open={isOpen} onOpen={openModal} onClose={closeModal}>
        <Modal.Header>Log in</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Please log in with ...</Header>
          </Modal.Description>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()} />
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};
