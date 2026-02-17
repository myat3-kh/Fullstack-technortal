//import { useState } from "react";
//import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/get-session", {
      method: "GET",
      credentials: "include",
    });
    if (!isPending && !session) {
      navigate("/login");
    }
  }, [session, isPending, navigate]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <h1>Welcome to the Furniture Store</h1>
      {session && <p>Hello,{sessionStorage.user.name}</p>}
      {session && <p>Your email:{sessionStorage.user.email}</p>}
      {session ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <p>Please sign in to access your account.</p>
      )}
    </>
  );
}

//type HeaderProps={
// title:string;
//body:string;
//};

//function Header(props:HeaderProps){...}
/*
interface TitleProps {
  title: string;
}

interface HeaderPropsInterface extends TitleProps {
  body: string;
}
function Header({ title, body }: HeaderPropsInterface) {
  return (
    <>
      <h1 className="text-red-500">This is {title}</h1>
      <div>This is {body}</div>
    </>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const date = new Date().toLocaleDateString();

  const increament = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <>
      <Link to="/login">Go to Login</Link>
      <Header
        title="Furniture Store"
        body="Welcome to our furniture store"
      ></Header>
      <h2>Today is {date}</h2>
      <button onClick={increament}>Count - {counter}</button>
      <Button>Click me</Button>
    </>
  );
}
  */

export default App;
