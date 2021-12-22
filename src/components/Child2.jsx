import moment from 'moment'
import './Child2.css'

const Child2 = ({count}) => {

    return (
        <div className='Child2'>
            <h2>Child2</h2>
            <p>render time : {moment().format('HH:mm:ss')}</p>
            <p>count : {count}</p>
        </div>
    );
};

export default Child2;