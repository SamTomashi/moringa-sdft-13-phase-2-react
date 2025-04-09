export default function TransactionRow({transaction, transactions, setTransactions}){

    function handleRemove(event){
        const newTransactions = transactions.filter((t) => {
            return t.id !== Number(event.target.id)
        })
        setTransactions(newTransactions)
    }

  

    return(
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>
                <button id={transaction.id} onClick={handleRemove} className="btn btn-sm btn-danger">X</button>
            </td>
        </tr>
    )
}