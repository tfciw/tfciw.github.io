import { Component, Vue } from 'vue-property-decorator'
import './App.less'

@Component
export default class App extends Vue {
  mounted() {
    console.log('App Component Mounted Console')
  }
  render() {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
    )
  }
}