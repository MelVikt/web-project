import { Header } from '../../widgets/header/index.ts';
import { Footer } from '../../widgets/footer/index.ts';
import auth from '../../shared/assets/images/auth.png'
import './register.scss'
export const Register = () => {
  return (
  <>
  <Header />
  <div className="register">
    <div className="register__left">
      <img className='register__expo' src={auth} />
    </div>       
    <div className="register__right">

      <h1 className="register__title">Register</h1>
      <p className="register__subtitle">Join to us</p>
      <form className="register__form" action="/login" method="POST">
        <label className="register__label" htmlFor="name">Your Name</label>
        <input
          className="register__input"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          required
        />

        <label className="register__label" htmlFor="email">Email</label>
        <input
          className="register__input"
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
        />

        <label className="register__label" htmlFor="password">Password</label>
        <input
          className="register__input"
          type="password"
          id="password"
          name="password"
          required
        />
        
        <label className="register__label" htmlFor="repeatPassword">Repeat password</label>
        <input
          className="register__input"
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          required
        />
        <button className="register__button" type="submit">Sign Up</button>
      </form>
      <p className="register__login-text">
        Already have an account?{' '}
        <a className="register__link" href="/login">Login</a>
      </p>
    </div>
  </div>
  <Footer />
  </>
  )
}
