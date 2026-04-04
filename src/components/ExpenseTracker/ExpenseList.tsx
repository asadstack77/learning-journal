export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expense: Expense[];
  onRemove: (id: number) => void;
}

const ExpenseList = ({ expense, onRemove }: Props) => {
  const total = expense.reduce((a, b) => {
    return a + b.amount;
  }, 0);
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expense.map((e) => (
            <tr key={e.id}>
              <td>{e.description}</td>
              <td>${e.amount}</td>
              <td>{e.category}</td>
              <td>
                <button
                  onClick={() => onRemove(e.id)}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${total}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
