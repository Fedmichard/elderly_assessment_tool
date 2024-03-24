import React from 'react';
import { Link } from 'react-router-dom';


const AccountPage = () => {
    return (
        <div>
            <h2 className='text-center'>Welcome to the Account Page!</h2>
            <div className='text-center mt-3'>
            <Link to='/booking'>
                <button className='btn btn-primary '>*Insert*</button>
            </Link>
            </div>

            <div>
                <h3><strong>*Insert*</strong></h3>
                <div className='container mt-3 border rounded border-primary'>
                    <div className='row'>
                        <div className='px-5 col-md-6 text-center'>
                            <h5><strong>
                            *Insert*<br/>
                            *Insert*    
                            </strong></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;