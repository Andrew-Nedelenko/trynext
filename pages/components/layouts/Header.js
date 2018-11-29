import React, { Component } from 'react'
import styled from "styled-components";
import { ServerStyleSheet } from 'styled-components'

export class Header extends Component {
    static async getInitialProps (ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
    }
  render() {
    return (
      <_Header>
        <header>header</header>
      </_Header>
    )
  }
}


const _Header = styled.header`
    color: green;
`

