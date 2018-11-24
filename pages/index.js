import styled from "styled-components";

export default () => 
<Wrapper>
    <h2 onClick={foo}>1</h2>
</Wrapper>

const foo = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await data.json()
    console.log(json.title)
    return await json.title
}


const Wrapper = styled.div`
    width: 100%;
    color: red;
    h2{
        color: green;
    }
    
`