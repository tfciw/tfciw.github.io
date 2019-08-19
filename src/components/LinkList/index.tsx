import { Component, Vue, Prop } from 'vue-property-decorator'
import { Tag, Tooltip } from 'ant-design-vue';
import './index.less';

@Component({
    components: {
        'a-tag': Tag,
        'a-tooltip': Tooltip
    }
})
export default class LinkList extends Vue {
    LinkList = ['如何打开浏览器', '从输入URL，浏览器做了什么']
    render() {
        return (
            <div class="link-list-container">
                {
                    this.LinkList.map((link: any, index: number) => {
                        console.log(link);
                        <a-tag>dakai</a-tag>
                        if (link.length > 10) {                            
                            return (
                                <a-tooltip title={link}>
                                    <a-tag color="blue" closable>
                                        {link.slice(0, 10) + '...'}
                                    </a-tag>
                                </a-tooltip>
                            )
                        } else {
                            return (
                                <a-tag closable>
                                    {link}
                                </a-tag>
                            )
                        }
                    })
                }
            </div>
        )
    }
}