import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

export default function Layout(props) {
  return (
    <>
      <Navbar user={props.user}/>
      <div>{props.children}</div>
      <Footer />
    </>
  )
}