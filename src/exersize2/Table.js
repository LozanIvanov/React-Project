import React, { useState } from "react";
import './Table.css'

export default function Table({ row, col }) {

    return (

        <table>
            <tr>
                {col.map(x => <th>{x}</th>)}
            </tr>
            {row.map(x => 
                <tr>
                    {x.map(c => <td>{c}</td>)}
                </tr>
            )}
        </table>

    )
}