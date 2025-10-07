import React from 'react';
import { BsShare } from 'react-icons/bs';
import { FaStar, FaEye } from 'react-icons/fa';
import { IoBookmarkOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const News = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    id,
    
    details,
  } = news;

  // Format the published date
  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  space-y-4 ">
      {/* Author Info */}
      <div className="flex items-center px-4 pt-4 pb-2 bg-base-200">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="text-sm font-semibold text-gray-800">{author.name}</h2>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
        <div className="ml-auto flex space-x-2 text-gray-500">
          <button><IoBookmarkOutline size={20}/></button>
          <button><BsShare size={20} /></button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold px-4 text-gray-800 leading-snug">
        {title}
      </h1>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover mt-2"
      />

      {/* Content */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.length > 180 ? (
          <>
            {details.slice(0, 180)}...
            <Link to={`/news-details/${id}`} className="text-orange-600 font-medium cursor-pointer"> Read More</Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-800 font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
