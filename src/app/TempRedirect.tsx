// 'use client'
// import { Provider } from 'react-redux'
// import { store } from '@/redux/store'

// import { redirect } from "next/navigation"
// import { useAppSelector } from "@/redux/store"
// import { ReduxProvider } from '@/redux/provider'


// export default function TempRedirect() {
//     const isLogged = useAppSelector((state) => state.auth.value.isLoggedIn);
//     if (!isLogged) {
//         redirect('/auth/login')
//     } else {
//         redirect('/dashboard')
//     }

//     return (
//         <Provider store={store}>
//             <div className={`
//                 ${isLogged ? 'hidden' : 'flex flex-col items-center justify-center'}
//             `}>
//                 <h1>TempRedirect</h1>
//                 <p>All I do is re re redirect</p>
//             </div>
//         </Provider>
//     )
// }