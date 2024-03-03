import React, { useState } from "react";
import List from "./list/List";

export default function AppList() {
    const items = [
        { icon: 'fa-solid fa-pencil', title: 'Example', description: 'example description' },
        { icon: 'fa fa-pencil', title: 'Example', description: 'example description' },
        { icon: 'fa fa-pencil', title: 'Example', description: 'example description' },
    ]
    return (
        <div>
            <List
                items={items}
                width={'30%'}
                direction={'row'}
            />

            <List
                items={items}
                width={'100%'}
                direction={'column'}
                color='aqua'
            />
        </div>
    )
}