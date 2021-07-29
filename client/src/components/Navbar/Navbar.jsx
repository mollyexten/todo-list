export default function Navbar(props) {
  return (
    <nav>
      {props.user?.username}
    </nav>
  )
}