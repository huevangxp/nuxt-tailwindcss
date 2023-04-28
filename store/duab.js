export const state = () => ({
    user: [],
    pages: [],
    loading: false
})

export const mutations = {
    setUser(state, data) {
        state.user = data
    },
    setPages(state, data) {
        state.pages = data
    },
    setLaoding(state, data) {
        state.laoding = data
    }
}

export const actions = {
    users({ commit }) {
        commit('setLaoding', true)
        this.$axios.get('https://api.duabhmoobtojsiab.com/page/1&__a=1')
            .then((data) => {
                console.log('data',data.data);
                // commit('setuser', data.data.items)
                // commit('setPages', data.data.pages)
                // commit('setLaoding', false)
            })
    },
    nextPage({ commit},id) {
        this.$axios.post(`https://api.duabhmoobtojsiab.com/page/${id}&__a=1`)
            .then((data) => {
               commit('setUser',data.data.items)
                commit('setPages',data.data.pages)
        })
      }
}