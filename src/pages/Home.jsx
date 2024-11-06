import AnimatedHeading from "../ui/AnimatedHeading";
import Heading from "../ui/Heading";

function Home() {
  return (
    <div>
      <p>Paragraph</p>
      <AnimatedHeading heading="Landing Page H1" id="heading01" as="h1" />
      <p>Paragraph</p>
      <AnimatedHeading
        heading="Landing Page H2"
        id="heading02"
        delay={0.15}
        as="h2"
      />
      <p>Paragraph</p>
      <AnimatedHeading
        heading="Landing Page H3"
        id="heading03"
        delay={0.3}
        as="h3"
      />
    </div>
  );
}

export default Home;
