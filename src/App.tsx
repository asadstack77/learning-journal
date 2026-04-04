import { useState } from "react";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";

const App = () => {
  const [expenses, setExpense] = useState([
    { id: 1, description: "Milk", amount: 20, category: "Groceries" },
    { id: 2, description: "Bread", amount: 30, category: "Groceries" },
    { id: 3, description: "Egg", amount: 70, category: "Groceries" },
    { id: 4, description: "Electric Bill", amount: 70, category: "Utilities" },
    { id: 5, description: "Guitar", amount: 70, category: "Entertainment" },
  ]);
  const [category, setCategory] = useState("");
  const filteredExpenseList = category
    ? expenses.filter((e) => e.category === category)
    : expenses;
  const handleRemove = (id: number) => {
    setExpense(expenses.filter((e) => e.id !== id));
  };
  const handleSubmit = (data: any) => {
    setExpense([...expenses, { ...data, id: expenses.length + 1 }]);
  };
  return (
    <>
      <div className="container py-3">
        <div className="row g-3">
          {/* Form */}
          <div className="col-12 col-md-6">
            <h5>ADD A NEW EXPENSE</h5>
            <div className="p-3 border rounded bg-light">
              <ExpenseForm onSubmitData={handleSubmit} />
            </div>
          </div>

          {/* Filter */}
          <div className="col-12 col-md-6">
            <h5>FILTER BY CATEGORY</h5>
            <div className="p-3 border rounded bg-light">
              <ExpenseFilter
                onSelectCategory={(category) => setCategory(category)}
              />
            </div>
          </div>

          {/* List */}
          <div className="col-12">
            <div className="p-3 border rounded">
              <ExpenseList
                onRemove={handleRemove}
                expense={filteredExpenseList}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
