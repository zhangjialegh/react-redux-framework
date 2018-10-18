import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'propertydetail',
            path: '/propertydetail',
            exact: true,
            component: Loadable({
                loader: () => import('pages/PropertyDetail/PropertyDetail'),
                loading: () => <div />
            })
        }
    ]
}