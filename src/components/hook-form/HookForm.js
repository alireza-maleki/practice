import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HookForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("نام کاربری اجباری است ."),
    email: yup
      .string()
      .email("ایمیل وارد شده معتبر نیست .")
      .required("ایمیل اجباری است ."),
    password: yup.string().max(10).min(4).required(""),
    repeatePasswrod: yup
      .string()
      .oneOf([yup.ref("password"), "رمز ها یکی نیست."])
      .required()
  });

  const { register, handleSubmit ,formState: {errors} } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-1/4 mx-auto flex space-y-2 items-center justify-center flex-col bg-slate-300 p-8 border rounded"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <input
        className="p-2 border rounded border-none outline-none"
        type="text"
        placeholder="name"
        {...register("name")}
      />
      {errors.name?.message}
      <input
        className="p-2 border rounded border-none outline-none"
        type="email"
        placeholder="email"
        {...register("email")}
      />
      {errors.email?.message}
      <input
        className="p-2 border rounded border-none outline-none"
        type="number"
        placeholder="password"
        {...register("password")}
      />
      {errors.password?.message}
      <input
        className="p-2 border rounded border-none outline-none"
        type="number"
        placeholder="repeatePasswrod"
        {...register("repeatePasswrod")}
      />
      {errors.repeatePasswrod?.message}
      <button className="px-5 py-2 bg-blue-700 w-full border rounded">
        Submit
      </button>
    </form>
  );
};

export default HookForm;
