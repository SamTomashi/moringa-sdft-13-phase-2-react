import { useNavigate } from "react-router-dom"
export default function TransactionRow({transaction, handleRemove}) {
  const navigate = useNavigate()
  
  function viewtransaction(id){
    navigate(`/transaction/${id}`)
  }
  
  return( 
    <tr key={transaction.id}>
      {/* <td>
        <a href={`/transaction/${transaction.id}`}>{transaction.id}</a>
      </td> */}
      <td onClick={()=> viewtransaction(transaction.id)}>
      {transaction.id}
      </td>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={()=> handleRemove(transaction.id)} className="btn btn-sm btn-danger">x</button>
      </td>
    </tr>
  )
}
