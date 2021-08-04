import React, {useState} from  'react';


 const RegisterForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    admin,
    setAdmin
 }) =>(
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label className='form-label'>Name</label>
            <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />                 
        </div>
        <div className="form-group">
            <label className='form-label'>Email</label>
            <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>                 
        </div>
        <div className="form-group">
            <label className='form-label'>Admin Code</label>
            <input type="text" className="form-control" value={admin} onChange={(e)=>setAdmin(e.target.value)} placeholder="Enter Admin Code" />                 
        </div>
        <div className="form-group">
            <label className='form-label'>Password </label>
            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>                 
        </div>

        <button disabled={!email || !password || !name} className='btn btn-success' type='submit'>submit</button>
    </form>
)

export default RegisterForm