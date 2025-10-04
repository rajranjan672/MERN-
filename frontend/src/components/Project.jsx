import React, { useEffect, useState } from 'react'
import NewProject from './NewProject'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';

const Project = () => {
    const [data, setData] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
     
  
        fetchData();
      }, []);
  
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/api/project/getProject`);
          setData(res.data.data);
          console.log('plan',res.data)// Initialize filteredData with fetched data
        } catch (error) {
          console.error('Error fetching data:', error);
        //   navigate('/login')
  
      }
    }
  return (
    <>
    <div className='container-fluid mt-5 pt-4'>
        <div className='mt-2'>
            <NewProject />
        </div>

        <div>
            {data.map((item, index) => { 
                return (
                    <Card key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>

                    </Card>
                )
            })}
        </div>

    </div>

    </>
  )
}

export default Project