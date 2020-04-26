import React, {useState, Suspense} from 'react'
const Desktop = React.lazy(() => import('../../components/about/content/Desktop'))
const Tablet = React.lazy(() => import('../../components/about/content/Tablet'));
const Content = () =>{

    const [ vpWidth, setVpWidth ] = useState(window.innerWidth)

    const display = () => {
        if(vpWidth >= 1000) return <Suspense fallback={<div>loading...</div>}><Desktop/></Suspense>
        if(vpWidth < 1000) return <Suspense fallback={<div>loading...</div>}><Tablet/></Suspense>
        // if(vpWidth <= 900) return <Mobile />
    }

    const check = () => setVpWidth(window.innerWidth)

    setInterval(check, 1000);
    return(
        display()
    )
}

export default Content