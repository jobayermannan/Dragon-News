import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorInsights from '../../../../News/EditorInsights';

const LeftNav = () => {
  const [categories,setCategories]=useState([]);

  useEffect(()=>{
     fetch ('http://localhost:5000/categories').then((res)=>res.json()).then(data=> setCategories(data)).catch((err)=>console.log(err))
  },[])


    return (
        <div>
         
            {
                categories.map((category)=> <p  key={category.id} >
                    <Link to={`/category/${category.id}`}  className='text-decoration-none '
          style={{ cursor: 'pointer', color: 'black' }}
          onMouseOver={(e) => (e.target.style.color = 'blue')}
          onMouseOut={(e) => (e.target.style.color = 'initial')}> {category.name} </Link>
                    </p>)
            }

          {categories.length > 0 && <EditorInsights lg={1} />} 
        </div>
    );
};

export default LeftNav;