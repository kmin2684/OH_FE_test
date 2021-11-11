import * as React from 'react';
import { useAppDispatch } from '../../store';
import { dataActions } from '../../store/dataSlice';

import "./Community.css";
import FALLBACK_IMAGE from '../../assets/No_image_available.svg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Skeleton, Grid } from '@mui/material';


interface propType {
  community: {avgPrice: string, imgUrl: string, name: string, id: string}, 
  hidden: boolean
};

export default function Community(props: propType) {

  const dispatch = useAppDispatch(); 

  const [image, setImage] = React.useState({loading: true})
  const avgPrice = props.community.avgPrice;
  const imgUrl = props.community.imgUrl;
  const name = props.community.name;
  const communityId = props.community.id; 


  const onMediaFallback = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = FALLBACK_IMAGE;
    event.currentTarget.style.objectFit = 'contain';
  };
  const onLoad = () => setImage(state => {return {...state, loading: false}});
  const onClick = () => dispatch(dataActions.replaceHomesModal({display: true, communityName: name, communityId}));


  return (
    <Grid item xs={12} sm={6} md={4} lg={3} style={ props.hidden?{display: 'none'} : {}}>
      <div className='Community'>
        <Card>
          {image.loading&& 
          <Skeleton  variant='rectangular' height={200} animation="wave"/>
          }
          <CardMedia
            component="img"
            height="200"
            src={imgUrl}
            onError = {onMediaFallback}
            onLoad = {onLoad}
            style={{display: image.loading? 'none': 'block'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {avgPrice === 'no homes for sale'? avgPrice 
              : `Average price: ${avgPrice}`}
            </Typography>
          </CardContent>
            <CardActions>
              <Button disabled = {avgPrice === 'no homes for sale'} size="small" onClick={onClick}>
                view homes
              </Button>
            </CardActions>
        </Card>
    </div>
    </Grid>
  );
}