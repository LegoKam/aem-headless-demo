import './transactions.css';
import shopicon from '../resources/shop_icon.svg';
import financeicon from '../resources/finance_icon.svg';
import entertainmenticon from '../resources/entertainment_icon.svg';

export default function Transactions({ transactionTitle }) {
    return (
        <div className='transactions'>
            <h4 className='sectionHeading' data-aue-prop="transactionTitle" data-aue-type="text">{transactionTitle}</h4>
            <table id="transactionList">
                <tbody>
                <tr>
                    <td><img src={entertainmenticon} /></td><td><strong>Horse Race</strong><br/>15/05/2023</td><td>Won</td><td>Card Payment</td><td>$500</td>
                </tr>
                <tr>
                    <td><img src={entertainmenticon} /></td><td><strong>Harness Racing</strong><br/>15/05/2023</td><td>Won</td><td>Transfer</td><td>$95</td>
                </tr>
                <tr>
                    <td><img src={entertainmenticon} /></td><td><strong>AFL Finals</strong><br/>13/05/2023</td><td>Won</td><td>Transfer</td><td>$220.40</td>
                </tr>
                <tr>
                    <td><img src={entertainmenticon} /></td><td><strong>MLB Matches</strong><br/>12/05/2023</td><td>Lost</td><td>Card Payment</td><td>-$20</td>
                </tr>
                <tr>
                    <td><img src={entertainmenticon} /></td><td><strong>US Election</strong><br/>12/05/2023</td><td>Lost</td><td>Card Payment</td><td>-$23</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}