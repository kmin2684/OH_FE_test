import { useGetCommunitiesQuery,useGetHomesQuery } from '../../store/mainApi';

export default function ErrorDisplay() {
   
    const communitiesFetch = useGetCommunitiesQuery(''); 
    const HomesFetch = useGetHomesQuery('');

    if (communitiesFetch.error) {
        return <>
            {('status' in communitiesFetch.error)&& 
                <h1>{communitiesFetch.error.status}</h1>
            }
            <h3>An error occurred while retrieving community data from the server</h3>
        </>;
    }  else if (HomesFetch.error) {
        return <>
            {('status' in HomesFetch.error)&& 
                <h1>{HomesFetch.error.status}</h1>
            }
            <h3>An error occurred while retrieving home data from the server</h3>
        </>;
    }

    return null; 
}