export const score = {
    namespaced: true,
    state: () => ({
        playerXScore: 0,
        playerOScore: 0
    }),
    mutations: {
    setPlayerXScore(state) {
        state.playerXScore++
      },
      setPlayerOScore(state) {
        state.playerOScore++
      }
    }
    }