// for axios option to feth data from jsonholder
const header = {
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}

const logError = err => console.log(err)

var store = new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    getTodos: function (state) {
      return state.todos
    },
  },
  mutations: {
    setTodos: function (state, todos) {
      state.todos = todos
    },
    addTodo: function (state, todo) {
      state.todos.unshift(todo)
    },
    removeTodo: function (state, todo) {
      state.todos = state.todos.filter(i =>  i.id !== todo)
    },
    completedTodo: function (state, todo) {
      console.log(todo)
      const index = state.todos.findIndex(e => e.id === todo.id)
      state.todos[index].completed = !state.todos[index].completed
    },
  },
  actions: {
    fetchTodos({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          commit('setTodos', response.data)
        }).catch(logError)
    },
    async postTodo({ commit }, todo) {
      await axios.post('https://jsonplaceholder.typicode.com/todos', todo, header)
        .then(response => {
          console.log(response.data)
          commit('addTodo', response.data)
        })
        .catch(logError)
    },
    async deleteTodo({ commit }, id) {
      await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id, header)
        .then(response => {
          console.log(response)
          commit('removeTodo', id)
        }).catch(logError)
    },
    async patchTodo({ commit }, todo) {
      await axios.patch('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo, header)
        .then(response => commit('completedTodo', response.data))
        .catch(logError)
    },
  }
})


var app = new Vue({
  el: '#app',
  data() {
    return {
      // todos: [],
      todo: '',
      isLoading: false,
    }
  },
  created() {
    console.log(store)
    this.getTodos();
  },
  computed: {
    todos: function () {
      return store.getters.getTodos
    },
  },
  methods: {
    getTodos() {
      store.dispatch('fetchTodos');
    },
    async postTodo() {
      if (this.todo === '') {
        M.toast({html: 'Must fill data!', displayLength: 3000})
        return;
      }
      const todo = {
        userId: 11,
        title: this.todo,
        completed: false
      }
      this.isLoading = true;
      await store.dispatch('postTodo', todo)
      this.todo = ''
      this.isLoading = false;
    },
    async completedTodo(todo) {
      this.isLoading = true;
      await store.dispatch('patchTodo', todo)
      this.isLoading = false;
    },
    async deleteTodo(id) {
      this.isLoading = true;
      await store.dispatch('deleteTodo', id)
      this.isLoading = false;
    }
  }
})