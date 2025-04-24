
import { useParams } from "react-router-dom"
import NavBar from "./NavBar"
import { useEffect, useState } from "react"
export default function Transaction(){

    const [transaction, setTransaction] = useState({})

    const {id} = useParams()

    useEffect(()=> {
        fetch(`http://localhost:4000/transactions/${id}`)
        .then(response => response.json())
        .then(data => setTransaction(data))
    
    }, [])
    return(
        <>
        <NavBar/>
         <ol>
            <li>{transaction.id}</li>
            <li>{transaction.type}</li>
            <li>{transaction.amount}</li>
         </ol>
        </>
    )
}