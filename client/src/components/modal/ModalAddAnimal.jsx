import React from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  sciName: '',
  countries: [],
  states: [],
  type: '',
  description: '',
  weight: '',
  lifespan: '',
  imageUrl: '',
  citeUrl: '',
}

const addAnimalSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
  sciName: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
  // countries: Yup.array()
  //   .min(1, 'Must have at least 1 selection')
  //   .required('Required'),
  // states: Yup.array()
  //   .min(1, 'Must have at least 1 selection')
  //   .required('Required'),
  type: Yup.string()
    .min(2, 'Must be at least 2 characters')
    .max(100, 'Must be 100 characters or less')
    .required('Required'),
  desc: Yup.string()
    .min(20, 'Must be at least 20 characters')
    .max(2000, 'Must be 2000 characters or less')
    .required('Required'),
  weight: Yup.number()
    .min(0, 'Must be value of at least 0')
    .max(99999, 'Must be value of 99999 or less'),
  lifespan: Yup.number()
    .min(0, 'Must be value of at least 0')
    .max(99999, 'Must be value of 99999 or less'),
  imageUrl: Yup.string()
    .url('Must be a valid URL'),
  citeUrl: Yup.string()
    .url('Must be a valid URL'),
});

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold" htmlFor={props.id || props.name}>{label}</label>
      <input
        className="bg-gray-100 focus:bg-gray-50 border border-gray-600 rounded px-2 py-1 outline-none"
        type={props.type || "text"} {...field} {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
}

const CustomTextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold" htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="bg-gray-100 focus:bg-gray-50 border border-gray-600 rounded px-2 py-1 outline-none"
        {...field} {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
}

const ModalAddAnimal = () => {
  return (
    <div className="h-full overflow-y-auto rounded">
      <h1 className="text-xl my-2 mx-4">Add Animal</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={addAnimalSchema}
        onSubmit={(values, { setSubmitting, resetForm, isSubmitting }) => {
          if (!isSubmitting) {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              // resetForm();
              setSubmitting(false);
            }, 2000);
          }
        }}
      >
        {props => (
          <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 mx-4">
            <CustomTextInput label="Name" name="name" placeholder="Lion" />
            <CustomTextInput label="Scientific Name" name="sciName" placeholder="Panthera leo" />
            <CustomTextInput label="Type" name="type" placeholder="Mammal" />

            <CustomTextAreaInput label="Description" name="desc" placeholder="Enter description"/>

            <CustomTextInput label="Weight (kgs)" name="weight" placeholder="20" type="number" />
            <CustomTextInput label="Lifespan (years)" name="lifespan" placeholder="15" type="number" />

            <CustomTextInput label="Image URL" name="imageUrl" placeholder="http://" />
            <CustomTextInput label="Citation URL" name="citeUrl" placeholder="http://" />

            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <button className="bg-blue-400 hover:bg-blue-300 rounded py-1" type="submit">
                {props.isSubmitting ? 'Loading...' : 'Submit'}
              </button>
              <button className="bg-gray-400 hover:bg-gray-300 rounded py-1" type="reset">Reset</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ModalAddAnimal;
