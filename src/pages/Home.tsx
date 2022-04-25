import { lazy } from "react"

const Navbar = lazy(() => import('../components/Navbar'))

const Home = () => {
  return (
    <>
      <Navbar/>
      <div>Home page</div>
    </>
  )
}

export default Home