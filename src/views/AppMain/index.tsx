import { Component, Vue } from 'vue-property-decorator'
import LinkList from '@/components/LinkList/index'
import './index.less'

@Component
export default class AppMain extends Vue{
    render() {
        return (
            <div class="app-container">
                <div class="top-container">

                </div>
                <div class="main-container">
                    <div class="left-container">
                        <LinkList></LinkList>
                        <div class="page-container">
                            <keep-alive max={10}>
                                <router-view />
                            </keep-alive>
                        </div>
                    </div>
                    <div class="right-container">
                        
                    </div>
                </div>
            </div>
        )
    }
}