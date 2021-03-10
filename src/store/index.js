import Vue from 'vue';
import Vuex from 'vuex';

import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        announcements: [],
        releases: []
    },

    mutations: {
        SET_ANNOUNCEMENTS(state, announcements) {
            state.announcements = announcements
        },
        SET_RELEASES(state, releases) {
            state.releases = releases
        }
    },

    actions: {
        getAllAnnouncements({ commit }) {
            api().get('/announcements')
                .then(response => {
                    commit('SET_ANNOUNCEMENTS', response.data)
                })
        },
        getAllReleases({ commit }) {
            api().get('/releases')
                .then(response => {
                    commit('SET_RELEASES', response.data)
                })
        }
    }
});