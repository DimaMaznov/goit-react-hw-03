import { Formik,  Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';



export default function ContactForm ({addContact})  {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Мінімальна кількість символів - 3')
    .max(50, 'Максимальна кількість символів - 50')
    .required('Поле обовязкове для заповнення'),
    number: Yup.string().min(3, 'Мінімальна кількість символів - 3')
    .max(50, 'Максимальна кількість символів - 50')
    .required('Поле обовязкове для заповнення'),
  });
  
  const handleSubmit = (values, actions) => {
		const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    addContact(newContact);
		actions.resetForm();
	};
  return (
      <Formik
        initialValues={{
          username: "",
          number: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
            <Field type="text" name="username" />
            <Field type="number" name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }