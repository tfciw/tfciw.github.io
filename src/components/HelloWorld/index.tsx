import { Component, Vue, Prop } from 'vue-property-decorator';
import './index.less';

@Component
export default class HelloWorld extends Vue {
    info = 'this is info';

    @Prop() msg!: string

    render() {
        return (
            <div class="hello">
                <h1>{ this.msg }</h1>
                <h2>{ this.info }</h2>
            </div>
        )
    }
}