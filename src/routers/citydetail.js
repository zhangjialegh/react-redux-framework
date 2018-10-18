import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'citydetail',
            path: '/citydetail',
            exact: true,
            component: Loadable({
                loader: () => import('pages/CityDetail/CityDetail'),
                loading: () => <div />
            })
        }
    ]
}