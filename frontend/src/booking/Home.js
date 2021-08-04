import React, {useState, useEffect} from 'react';
import { allRecords } from '../actions/record';
import SmallCard
 from '../components/cards/SmallCard';
const Home = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        getAllRecords();
    }, []);

    const getAllRecords = async () => {
        let res = await allRecords();
       // console.log(res.data);
        setRecords(res.data);
    }

    return(
        <>
        <div className='container-fluid h1  p-5 text-center'>
           All Records 
        </div>
        <div className="container-fluid">
            {/* <pre> {JSON.stringify(records, null, 4)}</pre> */}
            {records.map((record, id) => 
            <SmallCard key={id} record={record}/>

           )}
        </div>

        </>
    )
}

export default Home



