import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'propertylist',
            path: '/propertylist',
            exact: true,
            component: Loadable({
                loader: () => import('pages/PropertyList/PropertyList'),
                loading: () => <div />
            })
        }
    ]
}