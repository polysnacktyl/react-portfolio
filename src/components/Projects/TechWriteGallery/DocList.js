import React from 'react';
import { Link } from 'react-router-dom';
import documents from '../../../assets/data/documents';
import './style.css'

const DocList = (props) => {
    const links = (documents.map((document, i) => {
        return (
            <div key={i} className='doc'>
                <Link
                    to={{
                        pathname: `/work/docs/${document.id}`,
                        state: { file: document.url }
                    }}>
                    {document.title}
                </Link>
            </div>
        )
    }))
    return (
        <div className='content-container'>
            <div className='doclist'>
                {links}
            </div>
        </div>
    )
};

export default DocList;