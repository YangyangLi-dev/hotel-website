import { getCabin, getCabins } from "@/data/service";
import CabinCard from "./CabinCard";

export default async function CabinList({filter}){
    const cabins = await getCabins();
    let displayedCabins = cabins;
    if(filter === "all") displayedCabins = cabins;
    
    return(<div>
        {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id}/>
        ))}
    </div>);
}