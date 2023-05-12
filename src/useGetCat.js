import {useQuery} from '@tanstack/react-query';

export const useGetCat = () => {
    const { data, refetch, isLoading: isCatLoading} = useQuery(['cat'], async () => {
        return fetch('https://catfact.ninja/fact').then(response => response.json()).then(data => data);
    });

    const refetchData = () => {
        alert('DATA REFETCHED');
        refetch();
    };

    return {data, refetchData, isCatLoading};
}