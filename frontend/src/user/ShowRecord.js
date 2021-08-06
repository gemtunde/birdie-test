import React, {useState, useEffect} from 'react';
import { allRecords } from '../actions/record';
import SmallCard from '../components/cards/SmallCard';



const ShowRecord = ()  =>{
    const [records, setRecords] = useState(null);

    useEffect(() => {
        getAllRecords();
    }, []);

    const getAllRecords = async () => {
        let res = await allRecords();
       // console.log(res.data);
        setRecords(res.data);
    }
    if(records === null) return  <p>Loading ...</p>
    return (
        <>
        <div className='container-fluid h1  p-5 text-center'>
            Records 
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

export default ShowRecord
