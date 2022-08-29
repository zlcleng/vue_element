import { h, defineComponent } from 'vue'
import TableExpand from './expand'

export default defineComponent({
  name: 'TableCell',
  functional: true,
  compoments: { TableExpand },
  props: {
    column: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const propsColumn = props.column
    if (propsColumn.hidden) return
    const ely = h('el-table-column', {
      ...propsColumn,
      scopedSlots: {
          default: props => {
            if(props['renderHTML']) {
              return props['renderHTML'](h, props);
            } else if(props['formatter']){
              return props.formatter(props.row,props.column,props.row[props.prop], props.$index)
            } else {
              return props.row[props['prop']]
            }
          }
      },
    })
    const demo = () => {
      return <el-table-column {...propsColumn } />
    }
    console.log({ propsColumn }, ely, demo())
    return () => {
      return demo() //<el-button>是得不到发挥示范</el-button>
    }
    // h('el-table-column', { attrs: { ...props } })
    
    // return <el-table-column prop="date" label="Date" width="180" />
    // if (props.type === 'html') {
    //   return (
    //     <el-table-column
    //       {...{
    //         props: props,
    //         scopedSlots: {
    //           default: scope => <div {...{ domProps: { innerHTML: scope.row[props.prop] }}} />
    //         }
    //       }}
    //     />
    //   )
    // } else if (props.render) {
    //   return (
    //     <el-table-column
    //       {...{
    //         props: props,
    //         scopedSlots: {
    //           default: scope => <TableExpand render={props.render} data={scope} />
    //         }
    //       }}
    //     />
    //   )
    // } else {
    //   return <el-table-column {...{ props: props }} />
    // }
  }
})
