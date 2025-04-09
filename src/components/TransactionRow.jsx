export default function TransactionRow({transaction, removeTransaction}){

    return(
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>
                <button onClick={()=> removeTransaction(transaction.id)} className="btn btn-sm btn-danger">X</button>
            </td>
        </tr>
    )
}