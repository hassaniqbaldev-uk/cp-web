// const CircleText = () => {
//   const text = "● Your Rounded Text Around The Circle ●";
//   const chars = text.split(""); // split into individual characters
//   const radius = 70; // distance of text from center (outer than 100px circle)

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* main circle */}
//       <div className="absolute size-[100px] rounded-full bg-gray-200" />

//       {/* wrapper for letters */}
//       <div
//         className="relative"
//         style={{
//           width: `${radius * 2}px`,
//           height: `${radius * 2}px`,
//         }}
//       >
//         {chars.map((char, i) => {
//           const angle = (360 / chars.length) * i; // distribute evenly
//           return (
//             <span
//               key={i}
//               className="absolute left-1/2 top-1/2 origin-[0_0] text-[12px] font-medium"
//               style={{
//                 transform: `rotate(${angle}deg) translate(${radius}px) rotate(${90}deg)`,
//               }}
//             >
//               {char}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CircleText;
