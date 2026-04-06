// src/App.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import ExpenseList from "./components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./components/ExpenseTracker/ExpenseForm";

// Firebase REST API URL for your project (replace with your project ID)
const FIREBASE_URL =
  "https://expense-tracker-dev-asad-default-rtdb.firebaseio.com/";

const App = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [category, setCategory] = useState("");

  // Fetch expenses from Firebase
  useEffect(() => {
    axios
      .get(`${FIREBASE_URL}.json`) // Firebase Realtime DB REST API
      .then((res) => {
        if (res.data) {
          const data = Object.keys(res.data).map((key) => ({
            id: key,
            ...res.data[key],
          }));
          setExpenses(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter expenses
  const filteredExpenseList = category
    ? expenses.filter((e) => e.category === category)
    : expenses;

  // Remove expense
  const handleRemove = (id: number) => {
    axios
      .delete(`${FIREBASE_URL}/${id}.json`)
      .then(() => {
        setExpenses(expenses.filter((e) => e.id !== id));
      })
      .catch((err) => console.log(err));
  };

  // Add new expense
  const handleSubmit = (data: any) => {
    axios
      .post(`${FIREBASE_URL}.json`, data)
      .then((res) => {
        setExpenses([...expenses, { ...data, id: res.data.name }]);
      })
      .catch((err) => console.log(err));
  };

  return (
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
          <div className="p-3 border rounded table-responsive">
            <ExpenseList
              onRemove={handleRemove}
              expense={filteredExpenseList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
