import creditcardgreen from '../resources/offer1.jpg';
import creditcardgold from '../resources/offer2.jpg';
import './creditcarddetails.css';

export default function CreditCardDetails({ cardLabel }) {


    return (
        <div>
            <div className='creditcarddetails'>
                <p className='accountNoLabel' span data-aue-prop="cardLabel" data-aue-type="text">{cardLabel}</p>
                <p className='accountNo'>What's new</p>
            </div>
            <div className='flexrow'>
                <div className='creditcard'>
                    <img src={creditcardgreen} className="creditcardimage" alt="Credit Card" />
                </div>
                <div className='creditcard'>
                    <img src={creditcardgold} className="creditcardimage" alt="Credit Card" />
                </div>
            </div>
        </div>
    )
}