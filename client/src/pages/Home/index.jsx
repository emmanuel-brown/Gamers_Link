import React, {useState} from 'react'
import Hero from '../../components/home/hero'
import Content from '../../components/home/content'
import styled from "styled-components"

const Body = styled.body`
    background-color: #fff 
`
const Home = () =>(
    <Body>
        <Hero />
        <Content />
    </Body>
)

export default Home