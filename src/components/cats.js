import { useGetCat } from "../useGetCat";


export const Cat = () => {

    //using a custom hook
   const { data, isCatLoading, refetchData} = useGetCat();

   if (isCatLoading) return <h2>loading...</h2>

    return (
        <div>
            <button onClick={refetchData}>Refetch</button>
            <h2>{data?.fact}</h2>
        </div>
    );
}