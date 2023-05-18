const { createSlice, current } = require("@reduxjs/toolkit");
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const postSlice = createSlice({
  name: "allpost",
  initialState: {
    postdetails: [],
  },

  reducers: {
    getPostDetail(state, action) {
      state.postdetails = action.payload;
    },

    setPostStatus(state, action) {
      state.poststatus = action.payload;
    },

    setPostWithComment(state, action) {
      let newPosts = [...current(state.postdetails)] || [];
      const postIndex = newPosts.findIndex(
        (post) => post.id === action.payload.post_id
      );
      if (postIndex != -1)
        newPosts[postIndex] = {
          ...newPosts[postIndex],
          comments: action.payload.comments,
        };
      state.postdetails = newPosts;
    },
    // postWithLike(state, action) {
    //   let newlikes = [...current(state.postdetails ||[])];
    //   const postIndex = newlikes.findIndex(
    //     (post) => post.index === action.payload.id
    //   );
    //   if (postIndex != -1)
    //     newlikes[postIndex] = {
    //       ...newlikes[postIndex],
    //       likes: action.payload.allLike,
    //     };
    //   state.postdetails = newlikes;
    // },
  },
});

export const {
  getPostDetail,
  setPostStatus,
  setPostWithComment,
  postWithLike,
} = postSlice.actions;

export default postSlice.reducer;

export function fetchPost() {
  return async function fetchPostThunk(dispatch) {
    try {
      const res = await fetch("http://localhost:1234/posts");
      const data = await res.json();
      dispatch(getPostDetail(data));
    } catch (err) {
      console.log(err);
    }
  };
}
