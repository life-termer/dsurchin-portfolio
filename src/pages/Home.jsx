import AnimatedHeading from "../ui/AnimatedHeading";

function Home() {
  return (
    <div>
      <AnimatedHeading heading="Landing Page" id="heading01" />
      <p>Paragraph</p>
      <AnimatedHeading heading="Landing Page 5555" id="heading02" delay={0.3} />
    </div>
  );
}

export default Home;
