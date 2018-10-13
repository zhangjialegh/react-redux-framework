import Loadable from "react-loadable"
import home from './home'
import search from './search'
import index from './idx'

let config = [
    ...(home(Loadable)),
    ...(search(Loadable)),
    ...(index(Loadable))
]

export default config