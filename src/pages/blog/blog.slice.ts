import { createSlice, current, nanoid, type PayloadAction} from '@reduxjs/toolkit'
import type { Post } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'

interface BlogState{
  postList: Post[],
  editPost: Post | null
}

const initialState: BlogState =  {
  postList: [],
  editPost: null
}

// export const addPost = createAction('blog/addPost', function (post: Omit<Post, 'id'>){
//   return {
//     payload: {
//       ...post,
//       id: nanoid()
//     }
//   }
// })

// // export const addPost = createAction<Post>('blog/addPost')
// export const deletePost = createAction<string>('blog/deletePost')
// export const startEditPost = createAction<string>('blog/startEditPost')
// export const cancelEditPost = createAction('blog/cancelEditPost')
// export const finishEditPost = createAction<Post>('blog/finishEditPost')

const blogSlice = createSlice({
  name:'blog',
  initialState,
  reducers: {
    
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      const foundPostIndex = state.postList.findIndex(post  => post.id === postId)
      if (foundPostIndex !== -1) {
        state.postList.splice(foundPostIndex, 1)
      } 
    },
    startEditPost: (state, action:PayloadAction<string>) => {
      const postId = action.payload
      const foundPost = state.postList.find((post) => post.id === postId) || null
      state.editPost = foundPost
    },
    cancelEditPost: (state) => {
      state.editPost = null
    },
    finishEditPost: (state, action: PayloadAction<Post>) => {
      const postId = action.payload.id
      state.postList.some((post,index)=> {
        if (post.id === postId){
          state.postList[index] = action.payload
          return true;
        }
        return false;
      })
      state.editPost = null
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const post = action.payload
        state.postList.push(post)
      },
      prepare: (post: Omit<Post, 'id'>) => ({
        payload: {
          ...post,
          id:nanoid()
        }
      })
    }
  },
  extraReducers: (builder) => {
    // sử dụng addMatcher
    builder.addCase('blog/getPostListSuccess', (state, action:any) => {
      state.postList = action.payload
    })
    .addMatcher(
      // 1: Matcher (hàm đối sánh): trả về TRUE nếu action type kết thúc bằng './reject'
      (action) => action.type.includes('cancel'),
      // Reducer: hàm xử lý trạng thái khi matcher là TRUE
      (state) => {
        console.error(current(state));
      }
    )
    .addDefaultCase((state, action) => {
      console.log(`action type: ${action.type}`, current(state))
    })

  }
})

export const {addPost, startEditPost, cancelEditPost, finishEditPost, deletePost} = blogSlice.actions;
const blogReducer = blogSlice.reducer;
export default blogReducer


// // builder callback: xử lý state
// const blogReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addPost, (state, action)=> {
//       //immerjs
//       //immerjs giúp chúng ta mutate một state an toàn
//       const post = action.payload
//       state.postList.push(post)
//     })
//     .addCase(deletePost, (state, action) => {
//       const postId = action.payload
//       const foundPostIndex = state.postList.findIndex(post  => post.id === postId)
//       if (foundPostIndex !== -1) {
//         state.postList.splice(foundPostIndex, 1)
//       } 
//     })
//     .addCase(startEditPost, (state, action) => {
//       const postId = action.payload
//       const foundPost = state.postList.find((post) => post.id === postId) || null
//       state.editPost = foundPost
//     })
//     .addCase(cancelEditPost, (state)=> {
//       state.editPost = null
//     })
//     .addCase(finishEditPost, (state, action) => {
//       const postId = action.payload.id
//       state.postList.some((post,index)=> {
//         if (post.id === postId){
//           state.postList[index] = action.payload
//           return true;
//         }
//         return false;
//       })
//       state.editPost = null
//     })
// })

// export default blogSlice