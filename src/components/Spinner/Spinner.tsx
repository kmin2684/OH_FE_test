import './Spinner.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
    return (
    <div className = "Spinner">
        <CircularProgress size={'5rem'}/>
    </div>
    );
}