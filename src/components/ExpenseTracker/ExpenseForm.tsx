import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
interface Props {
  onSubmitData: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z
    .string({ message: "Description is required." })
    .min(3, { message: "Description should contain atleast 3 character." }),
  amount: z
    .number({ message: "This field is required." })
    .min(1, { message: "Amount should be more than 0." }),
  category: z.enum(["Groceries", "Utilities", "Entertainment"], {
    message: "Category is required.",
  }),
});
type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({  onSubmitData }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: ExpenseFormData) => {
    onSubmitData(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <select id="" className="form-select" {...register("category")}>
          <option value="">All Categories</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
