import Vue from 'vue';
import Vuex from 'vuex';

import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        announcements: []
    },

    mutations: {
        SET_ANNOUNCEMENTS(state, announcements) {
            state.announcements = announcements
        }
    },

    actions: {
        getAllAnnouncements({ commit }) {
            api().get('/announcements')
                .then(response => {
                    commit('SET_ANNOUNCEMENTS', response.data)
                })
        }
    }
});