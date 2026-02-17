import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <Link to="/">Go to Home</Link>
      <div>About Screen</div>
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </>
  );
}
export default About;
