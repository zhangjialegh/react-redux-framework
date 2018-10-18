import Loadable from "react-loadable"
import home from './home'
import search from './search'

import propertylist from './propertylist'
import citydetail from "./citydetail"
import propertydetail from "./propertydetail"

let config = [
    ...(home(Loadable)),
    ...(search(Loadable)),


    ...(propertylist(Loadable)),
    ...(citydetail(Loadable)),
    ...(propertydetail(Loadable))
]

export default config