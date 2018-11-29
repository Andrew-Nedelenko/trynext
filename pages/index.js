import styled from "styled-components";
import { Header } from './components/layouts/Header'

export default () => 
<Wrapper>
    <Header/>
    <h2>1</h2>
</Wrapper>

const foo = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await data.json()
    console.log(json)
}


const Wrapper = styled.div`
    width: 100%;
    color: red;
    h2{
        color: gold;
    }
    
`