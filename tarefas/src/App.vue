<template>
  <div id="app">
    <h1>Lista de tarefas</h1>
    <task-progress :progress="progress" />
    <new-task @taskAdded="addTask" />
    <task-grid :tasks="tasks" 
      @taskDeleted="deleteTask" 
      @taskStateChanged="toggleTaskState" 
    />
  </div>
</template>

<script>
import TaskGrid from './components/TaskGrid'
import NewTask from './components/NewTask'
import TaskProgress from './components/TaskProgress'

export default {
  name: 'App',
  components: {
    TaskGrid,
    NewTask,
    TaskProgress
  },
  data() {
    return {
      tasks: []
    }
  },
  computed: {
    progress() {
      const total = this.tasks.length
      const done = this.tasks.filter( t => !t.pending).length

      return Math.round(done / total * 100) || 0

    }
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },
  methods: {
    addTask(task) {
      const sameName = t => t.name === task.name
      const reallyNew = this.tasks.filter(sameName).length == 0

      if(reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
      }
    },
    deleteTask(i) {
      this.tasks.splice(i, 1)
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending 
    }
  },
  created() {
    const json = localStorage.getItem('tasks')
    this.tasks = JSON.parse(json) || []
  }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
  
  body {
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(129,213,127,1) 100%);
    font-family: 'Courgette', cursive;
  }
  #app {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  #app h1 {
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 3.2rem;
  }


</style>
