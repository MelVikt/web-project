import './login.scss'
import { Header } from '../../widgets/header/index.ts';
import { Footer } from '../../widgets/footer/index.ts';
import auth from '../../shared/assets/images/auth.png'
export const Login = () => {
  return (
  <>
  <Header />
  <div className="login">
    <div className="login__left">
      <img className='login__expo' src={auth} />
    </div>
    <div className="login__right">
      <h1 className="login__title">Welcome Back</h1>
      <p className="login__subtitle">login to continue</p>
      <form className="login__form" action="/login" method="POST">
        <label className="login__label" htmlFor="login">Login:</label>
        <input className="login__input" type="text" id="login" name="login" required />

        <label className="login__label" htmlFor="password">Password:</label>
        <input className="login__input" type="password" id="password" name="password" required />
        <a className="login__link login__link--forgot" href='/refresh'>Forget Password ?</a>
        <button className="login__button" type="submit">Enter</button>
      </form>
      <p className="login__signup">New user ? <a className="login__link login__link--signup" href='/register'>Sign Up</a></p>
    </div>
  </div>
  <Footer />
  </>
  )
}
