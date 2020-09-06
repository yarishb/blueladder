import React from 'react';
import './api.scss'
const Element = ({data, deleteCustomer}) => {
    return (
        <div>
            {
                data.map(data => {
                    return (
                        <div className="element">
                                <div className="element-persone"  key={data._id}>
                                     <div className="element-name">Name:</div><div className="value">{data.name}</div>
                                     <div className="element-name">Last name:</div><div className="value">{data.lastName}</div>
                                     <div className="element-name">Email:</div><div className="value email">{data.email}</div>
                                     <div className="delete" onClick={() => deleteCustomer(data._id)}>DELETE</div>
                                </div>
                         </div>
                    )
                })
            }
        </div>
    )
}

export default Element;