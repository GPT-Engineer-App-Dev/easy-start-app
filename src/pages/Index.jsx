import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg mb-8">Start building your application by modifying this template.</p>
      <Button onClick={() => navigate("/placeholder")}>Get Started</Button>
    </div>
  );
};

export default Index;