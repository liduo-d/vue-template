import {createStore} from 'vuex'

import app from './modules/app'
import auth from './modules/auth'

export default createStore({
    modules: {
        app,
        auth
    }
})
