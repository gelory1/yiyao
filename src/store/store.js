import vuex from 'vuex'


let store = {
    state: {
        success: false,
        score: 0,
        floorTwoConver: false
    }
}

export default new vuex.Store(store);