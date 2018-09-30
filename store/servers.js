import krakatoaService from "~/services/KrakatoaService";

export const state = () => ({
  servers: []
});

export const getters = {
  get: state => state.servers
};

export const mutations = {
  SET_SERVERS_LIST(state, { list }) {
    state.servers = list;
  }
};

export const actions = {
  loadServers({ commit }) {
    console.log("calling action loadServers");
    krakatoaService
      .loadServers()
      .then(response => {
        console.log(response.data);
        commit("SET_SERVERS_LIST", {
          list: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
