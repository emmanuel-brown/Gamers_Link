import React, { Suspense, lazy } from 'react'

const Post = lazy(() => import('../../components/NewPost'))

const Home = () =>(
    <>
        <Suspense fallback={<div>loading...</div>}>
            <Post/>
        </Suspense>
    </>
)

export default Home