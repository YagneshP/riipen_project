/* eslint-disable */
import CloseIcon from '@mui/icons-material/Close';
const GrandTotal = ({ id, name, price,quntity}) => {
    return (
    <>
        {/* <!-- SUB TOTAL --> */}
        <p>{name} <span>{price * quntity} </span></p>
    </>
    );
};
export default GrandTotal;