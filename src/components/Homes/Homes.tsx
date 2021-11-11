import { useTypedSelector, useAppDispatch } from "../../store";
import { dataActions } from "../../store/dataSlice";
import { useGetHomesQuery } from "../../store/mainApi";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";
import {Container, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Home from "../Home/Home";
import Community from "../Community/Community";

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
        // container={() => document.querySelector('.chat-window')}
        // style={{position: 'absolute'}}
        // BackdropProps={{ style: { position: 'absolute' } }}
        // componentsProps={{style: { padding: '100' }}}

        // classes={{
        //     scrollPaper: classes.topScrollPaper}}

        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        maxWidth='lg'
        fullWidth={true}
    >
        {/* <DialogTitle>
            members   
        </DialogTitle> */}

        <div style={{fontSize: '25px', margin: '1rem'}}>{state.communityName}</div>

            <Grid container columns={{ xs: 12, sm: 12, md: 12, lg:12 }} justifyContent="flex-start">     
                {/* <Home /><Home /><Home /><Home /><Home /><Home /><Home /><Home /> */}
                {data?.filter(home => home.communityId === state.communityId)?.map((home, index) => {
                    return <Home home={home} index={index}/>;
                })}
            </Grid>
    </Dialog>
    </>
    )
}
