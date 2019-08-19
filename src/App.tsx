import { Component, Vue } from 'vue-property-decorator'
import AppMain from '@/views/AppMain/index'
import './App.less'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <AppMain></AppMain>
      </div>
    )
  }
}