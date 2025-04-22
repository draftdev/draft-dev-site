// import ServiceInfo from '@/components/page-components/newsletter/service-info'
// import React from 'react'

// interface FormHeaderProps {
//   title: string
//   descriptionOne?: string
//   descriptionTwo?: string
// }

// export const FormHeader: React.FC<FormHeaderProps> = ({
//   title,
//   descriptionOne,
//   descriptionTwo,
// }) => {
//   return (
//     <div className="bg-gradient-brand pt-32">
//       <main className="relative isolate py-16">
//         <div
//           aria-hidden="true"
//           className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl"
//         />
//         <div className="overflow-hidden">
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="m-auto max-w-2xl items-center gap-x-12 lg:mx-0 lg:flex lg:max-w-none">
//               <div className="relative m-auto lg:shrink-0 xl:max-w-4xl">
//                 <h1 className="sm:header-light mb-6 pb-4 text-center font-code text-3xl font-semibold text-white lg:text-left">
//                   {title}
//                 </h1>
//                 {descriptionOne && (
//                   <p className="sm:paragraph-light pb-6 text-center text-base text-gray-100 sm:pb-0 lg:text-left">
//                     {descriptionOne}
//                   </p>
//                 )}
//                 {descriptionTwo && (
//                   <p className="sm:paragraph-light pb-6 text-center text-base text-gray-100 sm:pb-0 lg:text-left">
//                     {descriptionTwo}
//                   </p>
//                 )}
//                 <div className="my-8 py-16">
//                   <ServiceInfo />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
