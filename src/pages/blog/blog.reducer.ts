import {createAction, createReducer} from '@reduxjs/toolkit'
import type { Post } from '../../types/blog.type'
import { initialPostList } from '../../constants/blog'

interface BlogState{
  postList: Post[]
}

const initialState: BlogState =  {
  postList: initialPostList
}

export const addPost = createAction<Post>('blog/addPost')

// builder callback: xử lý state
const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action)=> {
    //immerjs
    //immerjs giúp chúng ta mutate một state an toàn
    const post = action.payload
    state.postList.push(post)
  })
})

export default blogReducer