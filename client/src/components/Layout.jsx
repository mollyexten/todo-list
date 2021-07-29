import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

export default function Layout(props) {
  return (
    <>
      <Navbar setUser={props.setUser} user={props.user}/>
      <div>{props.children}</div>
      <Footer />
    </>
  )
}