import React,{useState} from 'react';
import { toast } from 'react-toastify';
import {DatePicker, Select} from 'antd'
import moment from 'moment';
import { createRecord } from '../actions/record';
import {createDispatchHook, useSelector} from 'react-redux';

const {Option} = Select ;

const NewRecord = () => {

    //redux 
    const {auth} = useSelector((state)=> ({...state}));
    const {token} = auth;

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
    const handleSubmit = async(e) => {
       e.preventDefault();
      // console.log(values);

      //use form data. its a default feature in the browser
      let recordData = new FormData();

      recordData.append('title', title);
      recordData.append('description', title);
      recordData.append('location', location);
      recordData.append('price', price);
      image && recordData.append('image', image);
      recordData.append('from', from);
      recordData.append('to', to);
      recordData.append('bed', bed);

      console.log([...recordData]);
       let res = await createRecord(token, recordData )
       console.log('patients record created', res);
       toast.success('New Patient record created');
       //page refresh
       setTimeout(()=>{
            window.location.reload();
       },1000);

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
                <label className="label-group">location</label>
                <input 
                type="text"
                className="form-control m-2"
                name='location'
                placeholder='your location'
                onChange={handleChange}
                value={location}                 
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
            {/* <div className="form-group">
                <label className="label-group">bed</label>
                <input 
                type="number"
                className="form-control m-2"
                name='bed'
                placeholder='no of beds'
                onChange={handleChange}
                value={bed}                 
                 />

                 <select>

                 </select>
            </div> */}
            <Select 
            className="w-100 m-2"
            size='large'
            placeholder="number of beds"
            onChange={(value) => setValues({...values, bed:value})} >
                <Option key={1}> {1}</Option>
                <Option key={2}> {2}</Option>
                <Option key={3}> {3}</Option>
                <Option key={4}> {4}</Option>

            </Select>
            <DatePicker 
            placeholder="From date"
            className="form-control m-2"
            onChange={(date, dateString) => setValues({...values, from: dateString})}
            disabledDate={(current)=> current && current.valueOf() < 
            moment().subtract(1, 'days')}
            />
            <DatePicker 
            placeholder="To date"
            className="form-control m-2"
            onChange={(date, dateString) => setValues({...values, to: dateString})}
            disabledDate={(current)=> current && current.valueOf() < 
                moment().subtract(1, 'days')}
            />
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



