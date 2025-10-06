import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router';
import News from '../component/News';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [categoryNews, setCategorynews ] = useState([])
   useEffect(()=>{

if(id=="0"){
    setCategorynews(data)
    return
}
else if (id=="1"){
    const filterdata = data.filter((news) => news.others.is_today_pick == true)
    setCategorynews(filterdata)
    return
}
else {
       const filterdata = data.filter((news) => news.category_id == id)
       setCategorynews(filterdata)
}

    
     
   }, [data ,id])
    
    return (
        <div>
            <h2 className='font-bold'>total <span className='text-secondary'>{categoryNews.length} </span> news found </h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map (news => <News key={news.id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;