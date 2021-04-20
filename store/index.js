export const state = () => ({
    name: 'Danikoko'
})

export const getters = {
    uppercase_name(state) {
        return state.name.toUpperCase()
    }
}