// Import hàm cốt lõi từ redux toolkit. hàm này tạo ra redux store
import {configureStore} from '@reduxjs/toolkit'
// import một reducer cụ thể. Hàm quản lý trạng thái và logic cho trạng thái
import blogReducer from './pages/blog/blog.slice'

// Khởi tạo redux store
// 
export const store = configureStore({
  // Định nghĩa cấu trúc của trạng thái toàn cục (Root State)
  reducer: {blog: blogReducer},

  // thuộc tính này nhận một đối tượng, nơi mỗi (key) đại diện cho một phần trạng thái
  // và value là hàm reducer tương ứng
})


// Lấy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>
// store.getState: Phương thức tích hợp của redux Store, trả về trạng thái hiện tjai của toàn bộ store
// Tạo ra kiểu dữ liệu cho toàn bộ trạng thái store

export type AppDispatch = typeof store.dispatch
// store.dispatch: Hàm này là phương thức gửi các hành động đến Store
// typeof store.dispatch: Lấy kiểu hàm của dispatch
// Dòng này tự động tạo ra kiểu dữ liệu cho hàm dispatch.
