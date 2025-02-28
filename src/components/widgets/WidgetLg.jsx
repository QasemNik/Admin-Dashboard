import React from 'react'
import "./WidgetLg.css"
import { Transactions } from '../../../data.js'

function WidgetLg() {

    const Btn = ({ type }) => <button className={"WidgetLgBtn " + type}>{type}</button>

    return (
        <>
            <div className='widgetLg'>
                <h3 className="WidgetLgTitle">
                    Latest Transactions
                </h3>
                <table className='WidgetLgTable'>
                    <thead>
                        <tr className="WidgetLgTr">
                            <th className="WidgetLgTh">
                                Customer
                            </th>
                            <th className="WidgetLgTh">
                                Date
                            </th>
                            <th className="WidgetLgTh">
                                Amount
                            </th>
                            <th className="WidgetLgTh">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Transactions.map((trans) => (
                            <tr className="WidgetLgTr" key={trans.id}>
                                <td className="WidgetLgUser ">
                                    <img className='WidgetLgImg' src={trans.img} alt="user" />
                                    <span className='WidgetLgName'>{trans.customer}</span>
                                </td>
                                <td className="WidgetLgDate">{trans.date}</td>
                                <td className="widgetLgAmount">${trans.amount}</td>
                                <td className="WidgetLgStatus">
                                    <Btn type={trans.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WidgetLg