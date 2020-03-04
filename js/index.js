const header = {
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}


var app = new Vue({
  el: '#app',
  data() {
    return {
      todos: [],
      todo: '',
      isLoading: false,
    }
  },
  created() {
    this.getTodos();
  },
  // watch: {
  //   todos() {
  //     console.log('todo', this.todos)
  //     localStorage.setItem("todos", JSON.stringify(this.todos));
  //   }
  // },
  methods: {
    getTodos() {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          this.todos = response.data
        })
        .catch(error => {
          console.log(error);
        })
    },
    postTodo() {
      const todo = {
        userId: 11,
        title: this.todo,
        completed: false
      }
      console.log('hai', todo)
      this.isLoading = true;
      axios.post('https://jsonplaceholder.typicode.com/todos', todo,header)
        .then(response => {
          this.todos.push(response.data)
          this.isLoading = false;
          console.log(response)
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        })
    },
    completedTodo(todo) {
      console.log('hai', todo)
      axios.patch('https://jsonplaceholder.typicode.com/todos/' + todo.id, { completed: true },header)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    deleteTodo(id) {
      axios.delete('https://jsonplaceholder.typicode.com/posts/' + id,header)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
})