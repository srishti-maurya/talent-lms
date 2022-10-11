import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <Link to={routes.home()}>Return home</Link>
      <h1>Login</h1>
    </>
  )
}

export default LoginPage
