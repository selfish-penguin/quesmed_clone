import {ReactComponent as ReactLogo} from './logo.svg';

export default function Navbar() {
  return (
    <div classname="sticky-nav">
      <nav className="nav">
        <ReactLogo className='brain' width='130' />
        <a className="nav-link nav-link-ltr" href="/product">product</a>
        <a className="nav-link nav-link-ltr" href="/pricing">pricing</a>
        <a className="nav-link nav-link-ltr" href="/resources">resources</a>
        <a className="nav-link nav-link-ltr" href="/community">community</a>
        <a className="nav-link nav-link-ltr" href="/login">Log in</a>
        <button href="/get_started">Get Started</button>
      </nav>
    </div>
  )
}
