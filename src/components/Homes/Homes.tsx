import { useSelector, useDispatch } from "react-redux";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";
import {Container, Grid} from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Homes() {
    // const members = useSelector(state => state.status.chatHistory?.members);

    // const classes = useStyles(); 


    return ( <>    
    <Dialog
        open={true}
        // onClose={() => prop.setModalOpenProp(false)}
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

        <div style={{fontSize: '25px', margin: '1rem'}}>members</div>

            <Grid container columns={{ xs: 12, sm: 12, md: 12, lg:12 }} justifyContent="flex-start">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '0.5rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '1rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '1rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '1rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '1rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '1rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '1rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card style={{width: '100%', margin: '1rem'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Home 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                type: house
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> 

            </Grid>
    </Dialog>
    </>
    )
}
