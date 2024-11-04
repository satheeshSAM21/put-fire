import React from 'react';
import Home from '../page/home';
import { PageRouter } from '../component/pageRouter';
import { Navigate } from 'react-router-dom';

const PublicComponent =()=>{
    let data = [
        {
            element:<Home />,
            path:'/home'
        },
        {
            element:<Home />,
            path:'*'
        },
        {
            element:<Navigate to={"/home"} replace /> ,
            path:'/'
        }
    ]
    return (
        <div className='min-h-[500px]'>
            <PageRouter data={data} />
           
        </div>
        
    )
}

export default PublicComponent;