import React from 'react';
import documentsData from '../../../assets/data/documents';
import './style.css';
import {Link} from 'react-router-dom';

const Documents = () => {
    const docs = documentsData.map(document => {
        return (
            <div key={document.id} className='doc'>
              <Link to={`/work/docs/${document.id}`}>{document.title}</Link>
            </div>
        )
    })

    return (
        <div className='content-container'>
            <div className='doclist'>
                {docs}
            </div>
            <Link to='/work'><div className='back'>back</div></Link>
        </div>
                      
                    
                
    )
};


export default Documents;