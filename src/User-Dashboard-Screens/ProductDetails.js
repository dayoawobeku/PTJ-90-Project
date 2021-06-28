import React from 'react';
import UserDashboardLayout from './UserDashboardLayout';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    return (
        <UserDashboardLayout>
            <header className='p-d-header'>Product's Detail</header>
            <form>
                <p>Brief Description:</p>
                <textarea name="description" rows='5' cols='50'></textarea>

                <div className='p-q'>
                    <div className='price'> 
                        <p>Price:</p>
                        <input type="number" min="1" step="any" />
                    </div>
                    <div className='qty'>
                        <p>Quantity:</p>
                        <input type="number" name="quantity" min="1" max="10"></input>
                    </div>
                </div>
            </form>
            <Link to='/payment' className='next-btn'>Next</Link>
            
        </UserDashboardLayout>
    )
}

export default ProductDetails
