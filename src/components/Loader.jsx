// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as='div'
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className='canvas-loader'></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: "#F1F1F1",
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >
//         {progress.toFixed(2)}%
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;

import { Html } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 90,
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 16,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 50,
          textAlign: "center",
        }}
      >
        Checking system health
      </p>
    </Html>
  );
};

export default CanvasLoader;
