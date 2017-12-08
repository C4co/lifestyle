import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'

import Block from 'components/block/block'
import {CodeBlock} from 'components/code/code'
import Example from 'components/example/example'

import getFile from 'helpers/files'

const tablesExample = `
<table class='table'>
  <caption> Example </caption>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
    <tr>
      <td>Ernst Handel</td>
      <td>Roland Mendel</td>
      <td>Austria</td>
    </tr>
  </tbody>
</table>
`

class Tables extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    getFile('./src/style/table.scss')
      .then(res => { this.setState({ tableSass: res }) })
  }

  render(){
    return(
      <Page title='Tables' description='Table configuration'>
        <Block title='Default table'>
          <Example title='Table' code={tablesExample} />
        </Block>

        <Block title='Implementation'>
          <CodeBlock title='table.scss'>
            {`${this.state.tableSass}`}
          </CodeBlock>
        </Block>
      </Page>
    )
  }

}

export default Tables