import React,{useState} from 'react';
import AlgoliaPlaces from 'algolia-places-react'
import { toast } from 'react-toastify';

const config ={
    appId : process.env.REACT_APP_ALGOLIA_APP_ID,
    appkey : process.env.REACT_APP_ALGOLIA_API_KEY ,
    language : 'en',
    countries : ["au"],
};

const NewRecord = () => {
    //state
    const [values, setValues] = useState({
        title : '',
        description : '',
        location : '',
        image : '',
        price : '',
        from: '',
        to : '',
        bed : '',
    });
    const [preview, setPreview] = useState(
   " http://via.placeholder.com/100x100.png?text=PREVIEW");
    //destructure state
    const {title, description, location, image, price, from, to, bed} = values ;

    //handle form submit 
    const handleSubmit = (e) => {
      //  e.preventDefault();
    }

    //handle imAGE UPLOAD
    const handleImageChange = (e) => {
        //console.log(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
        setValues({...values, image:e.target.files[0]});
    }

    const handleChange = (e) => {
       
        setValues({...values, [e.target.name] : e.target.value});

    }

    //patient form
    const patientForm = ()=> (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className="btn btn-outline-secondary btn-block m-2 text-left">
                    Image
                    <input
                     type='file'
                     name='image'
                     onChange={handleImageChange}
                     accept='image/*' 
                     hidden                    
                     />
                </label>                
            </div>

            <div className="form-group">
                <label className="label-group">title</label>
                <input 
                type="text"
                className="form-control m-2"
                name='title'
                placeholder='title'
                onChange={handleChange}
                value={title}                 
                 />
            </div>
            <div className="form-group">
                <label className="label-group">Description</label>
                <textarea 
                className="form-control m-2"
                name='description'
                placeholder='description'
                onChange={handleChange}
                value={description}                 
                 />
            </div>
            
            {/* <AlgoliaPlaces
            className="form-control ml-2 mr-2"
            placeholder="Location"
            defaultValue={location}
            options={config}
            onChange = {({suggestion})=>
            setValues({...values, location : suggestion.value}) }
            style = {{height : '50px'}}
            
            /> */}

            <div className="form-group">
                <label className="label-group">price</label>
                <input 
                type="number"
                className="form-control m-2"
                name='price'
                placeholder='price'
                onChange={handleChange}
                value={price}                 
                 />
            </div>
            <div className="form-group">
                <label className="label-group">bed</label>
                <input 
                type="number"
                className="form-control m-2"
                name='bed'
                placeholder='no of beds'
                onChange={handleChange}
                value={bed}                 
                 />
            </div>
            <button type='submit' className='btn btn-danger m-2'>Save Records</button>
        </form>
    )

    return(
        <>
            <div className='container-fluid bg-secondary p-5 text-center'>
            <h2>Add Records</h2>
            </div>
        
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-10">
                        {patientForm()}
                    </div>
                    <div className="col-md-2">
                        <img
                         src={preview} 
                         alt='preview_image'
                         className='img img-fluid m-2'
                         
                         />
                        <pre>
                        {JSON.stringify(values, null ,4)}</pre>
                    </div>

                </div>
            </div>
        
        </>
    )
}

export default NewRecord



