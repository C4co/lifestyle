import { Page } from '../templates'
import Head from 'next/head'
import { Content, Header } from '@/components'

export default function Buttons(){
  return(
    <Page>
      <Head>
        <title> Buttons </title>
      </Head>

      <Header> Buttons </Header>

      <Content>
        <div>
          <button className="button button--big"> Button </button>
          <button className="button"> Button </button>
          <button className="button button--small"> Button </button>
        </div>

        <div>
          <button className="button button--big button--outline"> Button </button>
          <button className="button button--outline"> Button </button>
          <button className="button button--small button--outline"> Button </button>
        </div>

        <div>
          <button className="button button--rounded button--big"> Button </button>
          <button className="button button--rounded"> Button </button>
          <button className="button button--rounded button--small"> Button </button>
        </div>

        <div>
          <button disabled className="button button--big button--loading"> Loading... </button>
          <button disabled className="button button--loading"> Loading... </button>
          <button disabled className="button button--small button--loading"> Loading... </button>
        </div>

        <div>
          <button disabled className="button button--big button--loading button--outline"> Button </button>
          <button disabled className="button button--loading button--outline"> Button </button>
          <button disabled className="button button--small button--loading button--outline"> Button </button>
        </div>

        <div>
          <button className="button button--big button--full"> Button </button>
          <button className="button button--big button--full button--outline"> Button </button>
        </div>
      </Content>

    </Page>
  )
}
