export default function TransactionRow({transaction, handleRemove}) {
  return( 
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={()=> handleRemove(transaction.id)} className="btn btn-sm btn-danger">x</button>
      </td>
    </tr>
  )
}
