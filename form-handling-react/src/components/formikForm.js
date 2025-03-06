import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4">
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="border"
        />
        {formik.errors.username && formik.touched.username && (
          <p className="text-red-500">{formik.errors.username}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="border"
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-500">{formik.errors.password}</p>
        )}
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">
        Register
      </button>
    </form>
  );
};

export default FormikForm;
