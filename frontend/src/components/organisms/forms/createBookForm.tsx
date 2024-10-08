import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../atoms/fields/input';
import SubmitButton from '../../atoms/buttons/submitButton';
import { toastSuccess, toastError } from '../../../helpers/toast'

interface Book {
  title: string;
  author: string;
  year_of_publication: number | undefined;
}

const CreateBookForm: React.FC = () => {
  let initialValues: Book = {
    title: "",
    author: "",
    year_of_publication: new Date().getFullYear(),
  };

  const validationSchema = Yup.object({
    title: Yup.string()
    .max(255, 'Title must be 255 characters or less')
    .required('Title is required'),
  author: Yup.string()
    .max(255, 'Author name must be 255 characters or less')
    .required('Author is required'),
  year_of_publication: Yup.number()
    .min(1000, 'Enter a valid year')
    .max(new Date().getFullYear(), `Year must be ${new Date().getFullYear()} or earlier`)
    .required('Year of publication is required'),
  });

  const handleSubmit = async (
    values: Book,
    { resetForm }: { resetForm: () => void }
  ) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8000";

    try {
      const response = await fetch(backendUrl + 'api/books/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        resetForm();
        toastSuccess("Book added successfully!");
      } else {
        toastError("Something went wrong, please try again.");
      }
    } catch (error) {
      toastError("Something went wrong, please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="space-y-6">
          <Input
            id="title"
            label="Title"
            required
            error={errors.title && touched.title}
          />
          <Input
            id="author"
            label="Author"
            required
            error={errors.author && touched.author}
          />
          <Input
            id="year_of_publication"
            label="Year of publication"
            type="number"
            required
            error={errors.year_of_publication && touched.year_of_publication}
          />
          <SubmitButton
            isSubmitting={isSubmitting}
            label="Add the book"
          />
        </Form>
      )}
    </Formik>
  );
};

export default CreateBookForm;
