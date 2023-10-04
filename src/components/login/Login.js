import "./login.scss";

export default function Login({ email, name, toggle, handleToggle }) {
  return (
    <article
      className={`loginpage ${toggle && "block"}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="container__account">
        <h2 className="container__account__header">Account</h2>
        <button
          className="container__account__button"
          onClick={() => handleToggle()}
        >
          close
        </button>
      </div>
      <hr />
      <div className="container__verfication">
        <h2 className="container__verfication__header">
          Your account is not verified yet. A verification email has been sent
          to something@email.com.
        </h2>
        <button className="container__verfication__button">
          Resend Verification Email
        </button>
      </div>
      <hr />
      <div className="container__greeting">
        <h1 className="container__greeting__header">Hi, {name}</h1>
        <button className="container__greeting__signout">Sign out</button>
      </div>{" "}
      <hr />
      <div className="container__orders">
        <h2 className="container__orders__header__1">Orders</h2>
        <h5 className="container__orders__header__2">No orders yet</h5>
      </div>{" "}
      <hr />
      <div className="container__address">
        <h2 className="container__address__header__1">Address</h2>
        <h5 className="container__address__header__2">No saved address</h5>
      </div>{" "}
      <hr />
      <div className="container__profile">
        <h2 className="container__profile__header__1">Profile</h2>
        <h5 className="container__profile__header__2">{email}</h5>
      </div>
      <hr />
    </article>
  );
}
