import React from 'react';
import { Card, Label } from 'semantic-ui-react';
import { Todo } from '../../types';
import dayjs from 'dayjs';

interface Props {
  todo: Todo;
}

export const TodoCard: React.FC<Props> = ({ todo }) => {
  const { createdAt, done, title, content, deadLine, labelText, labelColor } = todo;

  return (
    <Card>
      <Card.Content>
        <Card.Header content={title} />

        <Card.Meta content={dayjs(createdAt).format('YYYY/M/D')} />
        <Card.Description content={content} />
      </Card.Content>
      {labelText ? (
        <Card.Content extra>
          <Card.Description>
            <Label color={labelColor ? labelColor : 'grey'} content={labelText} />
          </Card.Description>
        </Card.Content>
      ) : (
        <></>
      )}
    </Card>
  );
};
