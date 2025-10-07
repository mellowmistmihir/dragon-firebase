import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='space-y-10'>
            <img className='w-full h-[400px] object-cover' src={news.image_url} alt="" />
            <h2 className='font-semibold text-2xl'>{news.title}</h2>
            <p className='text-gray-500'>{news.details}</p>
             <button className='btn btn-primary'><Link to={`/category/${news.category_id}`}>Back to Category</Link></button>
        </div>
    );
};

export default NewsDetailsCard;