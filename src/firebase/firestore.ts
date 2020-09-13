import { firestore, auth } from './index';
import { Color, Todo } from '../types';

export const getTodos = async (): Promise<Todo[] | null> => {
  console.log('GET TODOS');
  const { currentUser } = auth();

  const querySnapshot = await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('todos')
    .orderBy('createdAt', 'asc')
    .get()
    .catch((error) => {
      console.log(error);
    });

  console.log(querySnapshot);

  const todos = querySnapshot
    ? querySnapshot.docs.map((todo) => {
        const { createdAt, done, title, content, deadLine, labelText, labelColor } = todo.data();

        return {
          id: todo.id,
          createdAt: createdAt.toDate(),
          done,
          title,
          content,
          deadLine: deadLine.toDate(),
          labelText,
          labelColor,
        };
      })
    : null;

  return todos;
};

export const addTodo = async (
  title: string,
  content?: string,
  deadLine?: Date,
  label?: { text: string; color: Color },
): Promise<void> => {
  const { currentUser } = auth();
  await firestore()
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .collection('todos')
    .add({
      createdAt: firestore.FieldValue.serverTimestamp(),
      done: false,
      title,
      content: content ? content : '',
      deadLine: deadLine ? firestore.Timestamp.fromDate(deadLine) : undefined,
      labelText: label?.text,
      labelColor: label?.color,
    })
    .catch((error) => {
      console.log(error);
    });
};
