import "./Homes.css"
import { useTypedSelector, useAppDispatch } from "../../store";
import { dataActions } from "../../store/dataSlice";
import { useGetHomesQuery } from "../../store/mainApi";
import Dialog from '@mui/material/Dialog';
import { Grid, Paper} from '@mui/material';
import {home} from "../../data_types/data_types"

import Home from "../Home/Home";

export default function Homes() {

    const {data} = useGetHomesQuery('');
    const state = useTypedSelector(state => state.data.homesModal);
    const dispatch = useAppDispatch();

    function onClose() {
        dispatch(dataActions.replaceHomesModal({display: false, communityId: '', communityName: ''}));
    }

    return ( <>    
    <Dialog className='Homes' open={state.display} onClose={onClose} maxWidth='lg' fullWidth={true} >
        <Paper className="title"> {state.communityName}</Paper>
        <Grid container columns={{ xs: 12, sm: 12, md: 12, lg:12 }} justifyContent="flex-start">     
            {data?.filter((home: home) => home.communityId === state.communityId)?.map((home: home, index: number) => {
                return <Home home={home} index={index} key={`home-${index}`}/>;
            })}
        </Grid>
    </Dialog>
    </>
    )
}
