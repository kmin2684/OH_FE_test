import { useTypedSelector, useAppDispatch } from "../../store";
import { dataActions } from "../../store/dataSlice";
import { useGetHomesQuery } from "../../store/mainApi";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid} from '@mui/material';
import Home from "../Home/Home";

export default function Homes() {

    const {data} = useGetHomesQuery('');
    const state = useTypedSelector(state => state.data.homesModal);
    const dispatch = useAppDispatch();

    function onClose() {
        dispatch(dataActions.replaceHomesModal({display: false, communityId: '', communityName: ''}));
    }

    return ( <>    
    <Dialog
    open={state.display}
    onClose={onClose}
    maxWidth='lg'
    fullWidth={true}
    >
        {/* <DialogTitle>
            members   
        </DialogTitle> */}

        <div style={{fontSize: '25px', margin: '1rem'}}>{state.communityName}</div>

            <Grid container columns={{ xs: 12, sm: 12, md: 12, lg:12 }} justifyContent="flex-start">     
                {data?.filter(home => home.communityId === state.communityId)?.map((home, index) => {
                    return <Home home={home} index={index} key={`home-${index}`}/>;
                })}
            </Grid>
    </Dialog>
    </>
    )
}
