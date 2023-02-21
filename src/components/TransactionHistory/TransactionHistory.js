import css from './TransactionHistory.module.css'

import { Row } from "./Row"
export const TransactionHistory = ({ items }) => {
    return (
    <table className={css.transaction_history}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th> 
            </tr>
        </thead>
            <tbody>
            {items.map(item => {
                    return (
                        <Row
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                    />
                            
                    )
                })
                    
            }              
        </tbody>   
  
    </table>
    )
    
}


                
  