import './Communities.css';
import {Container, Grid} from '@mui/material';
import Community from '../Community/Community';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import Spinner from '../Spinner/Spinner'; 
import { useGetCommunitiesQuery,useGetHomesQuery } from '../../store/mainApi';
import {useTypedSelector} from "../../store/index";
import {GetAveragePrice, SortByName} from "../../utils/organize_data";
import {community} from '../../data_types/data_types';


export default function Communities() {
    const communitiesFetch = useGetCommunitiesQuery('');
    const homesFetch = useGetHomesQuery('');
    const searchKey = useTypedSelector(state => state.data.searchKey);

    return (
        <div className="Communities">
            <Container maxWidth="lg">
                {(communitiesFetch.error || homesFetch.error) ?

                <ErrorDisplay />

                : (communitiesFetch.isLoading || homesFetch.isLoading) ? 

                <Spinner />

                : (communitiesFetch.data && homesFetch.data) ?

                <Grid container columns={{ xs: 12, sm: 12, md: 12, lg:12 }} justifyContent="flex-start">
                    {
                        communitiesFetch.data.map((community: community) => {
                            return {id: community.id, name: community.name, imgUrl: community.imgUrl, avgPrice: GetAveragePrice(community.id, homesFetch.data)}
                        })
                        .sort(SortByName)
                        .map(item => 
                        <Community community={item} key={item.name}
                        hidden={!item.name.toUpperCase().includes(searchKey.toUpperCase()) }
                        />
                        )
                    }
                </Grid>

                : 'no community data is available'
                }
            </Container>
        </div>
    );
}
