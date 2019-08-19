import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld/index';

@Component({
  components: {
    'hello-world': HelloWorld
  }
})
export default class Home extends Vue{
  mounted() {
    console.log('home');
  }
  render() {
    return (
      <div class="home">
        <hello-world msg="Welcome to Your Vue.js + TypeScript App"></hello-world>
      </div>
    )
  }
}