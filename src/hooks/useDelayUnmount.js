import { useEffect, useState } from "react";

export function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

// const Parent: React.FC = () => {
//   const [ isMounted, setIsMounted ] = useState(true);
//   const shouldRenderChild = useDelayUnmount(isMounted, 500);
//   const mountedStyle = {opacity: 1, transition: "opacity 500ms ease-in"};
//   const unmountedStyle = {opacity: 0, transition: "opacity 500ms ease-in"};

//   const handleToggleClicked = () => {
//       setIsMounted(!isMounted);
//   }

//   return (
//       <>
//           {shouldRenderChild &&
//               <Child style={isMounted ? mountedStyle : unmountedStyle} />}
//           <button onClick={handleToggleClicked}>Click me!</button>
//       </>
//   );
// }
