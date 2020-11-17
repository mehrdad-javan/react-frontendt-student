import React from 'react';
import { useForm } from 'react-hook-form';

export default function CreateStudentValidationComponent() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" name="name" ref={register({required: true})} />
      <input type="email" placeholder="Email" name="email" ref={register({required: true, maxLength: 100})} />
      <input type="number" placeholder="Age" name="age" ref={register({required: true, max: 50, min: 18})} />
      <input type="text" placeholder="Telephone" name="telephone" ref={register({required: true, min: 9, maxLength: 9})} />

      <input type="submit" />
    </form>
  );
}
