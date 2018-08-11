export const state = () => ({
  list: [
    {
      name: "servers",
      url: "/servers"
    },
    {
      name: "domains",
      url: "/domains"
    },
    {
      name: "accounts",
      url: "/accounts"
    },
    {
      name: "keywords",
      url: "/keywords"
    }
  ]
});

export const getters = {
  get(state) {
    return state.list;
  }
};

export const mutations = {};
