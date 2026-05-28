// import React, { useState, lazy, Suspense } from 'react'
// // import Post from './Components/Post'
// const Post = lazy(() => import("./Components/Post"));

// const App = () => {
//   const [showPost, setShowPost] = useState(false);
//   return (
//     <div>
//       App Component
//       <button onClick={() => setShowPost(true)}>Show Post</button>

//       <Suspense fallback={<h1>Loading.........</h1>}>
//         {
//           showPost && <Post />
//         }
//       </Suspense>
//     </div>
//   )
// }

// export default App
// ------------------------------------------------


import React from 'react'
import FormikForm from './Components/FormikForm'

const App = () => {
  return (
    <div>
      App Component
      <FormikForm />
    </div>
  )
}

export default App

