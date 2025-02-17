import React, { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import useAuthData from "../../Hooks/useAuthData";

function PaymentHistory() {
  let { user, loading } = useAuthData();

  let [payment, setPayment] = useState([]);
  useEffect(() => {
    if (!loading && user.email) {
      axiosSecure
        .get(`/payments/${user?.email}`)
        .then((res) => setPayment(res.data))
        .catch((err) => console.log(err));
    }
  }, [user, loading]);
  console.log(payment);

  return (
    <div>
      <div>Total orders: {payment.length}</div>;
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payment.map((item) => (
              <tr key={item._id}>
                <td>{item.email}</td>
                <td>{item.price}</td>
                <td>{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentHistory;
