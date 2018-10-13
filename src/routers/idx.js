import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'index',
            path: '/index',
            exact: true,
            component: Loadable({
                loader: () => import('pages/Index/Index'),
                loading: () => <div />
            })
        }
    ]
}