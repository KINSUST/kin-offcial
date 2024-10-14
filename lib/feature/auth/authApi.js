import { authSlice, clearUser, setUser } from "./authSlice";

const authApi = authSlice.injectEndpoints({
  endpoints: (builder) => ({
    authRegister: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    loggedInUser: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));  // store user data in Redux state
        } catch (err) {
      
        }
      },
      providesTags: ["User"],
    }),
    authLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));  // store user data in Redux state
        } catch (err) {
         
          
        }
      },
      invalidatesTags:["Auth"],
    }),
    authLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        body: {},
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(clearUser());  // store user data in Redux state
        } catch (err) {
      
        }
      },
      invalidatesTags: ["User","Auth"],
    }),

    resendActivationCode: builder.mutation({
      query: (data) => ({
        url: "/auth/resend-active-code",
        method: "POST",
        body: data,
      }),
    }),
    accountActivation: builder.mutation({
      query: (data) => ({
        url: "/auth/activate",
        method: "POST",
        body: data,
      }),
    }),
    findAccount: builder.mutation({
      query: (data) => ({
        url: "/users/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    passwordResetCodeSend: builder.mutation({
      query: (data) => ({
        url: "/users/resend-password-reset-code",
        method: "POST",
        body: data,
      }),
    }),
    passwordReset: builder.mutation({
      query: (data) => ({
        url: "/users/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    updateUserData: builder.mutation({
      query: (data) => ({
        url: `/users/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updateUserPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/users/password-update",
        method: "PATCH",
        body: data,
      }),
    }),
    updateUserPhoto: builder.mutation({
      query: (data) => ({
        url: `/users/${data.get("userId")}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useAccountActivationMutation,
  useAuthLoginMutation,
  useAuthLogoutMutation,
  useAuthRegisterMutation,
  useFindAccountMutation,
  useLoggedInUserQuery,
  usePasswordResetMutation,
  usePasswordResetCodeSendMutation,
  useResendActivationCodeMutation,
  useUpdateUserDataMutation,
  useUpdateUserPasswordMutation,
  useUpdateUserPhotoMutation,
} = authApi;
