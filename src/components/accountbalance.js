import maskedbackground from '../resources/maskedbackground.svg';
import './accountbalance.css';

export default function Accountbalance({greeting}) {

    return (
        <div>
            <div>
                <h2 className="greeting" data-aue-prop="greeting" data-aue-type="text">{greeting}</h2>
                <p className='accountNoLabel'>Total Bets</p>
                <p className='accountNo'>293</p>
            </div>
            <div className='accountbalance' style={{ backgroundImage: `url(${maskedbackground})` }}>
                <div className='balance'>
                    <p>Bet Balance</p>
                    <h3>$1,920.00</h3>
                </div>
                <div className='options'>
                    <p>Make A Bet</p>
                </div>
            </div>
        </div>
    )
}