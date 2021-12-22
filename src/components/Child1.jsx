import moment from 'moment'
import './Child1.css'

const Child1 = ({count}) => {
    return (
        <div className='Child1'>
            <h2>Child1</h2>
            <p>render time : {moment().format('HH:mm:ss')}</p>
            <p>count : {count}</p>
        </div>
    );
};

export default Child1;