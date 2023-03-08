import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cartService = createApi({
    reducerPath: 'cart',
    tagTypes: 'carts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders: (headers, { getState }) => {
            const reducers = getState();
            const token = reducers?.authReducer?.userToken;
            headers.set('authorization', token ? `Bearer ${token}` : '');
            return headers;
        }
    }),
    endpoints: (builder) => {
        return {
            addCart: builder.mutation({
                query: (data) => {
                    return {
                        url: 'add-cart',
                        method: 'POST',
                        body: data
                    }
                },
                invalidatesTags: ['carts']
            }),
            addNewCart: builder.mutation({
                query: (data) => {
                    return {
                        url: 'add-new-cart',
                        method: 'POST',
                        body: data
                    }
                },
                invalidatesTags: ['carts']
            }),
            updateCart: builder.mutation({
                query: (data) => {
                    return {
                        url: 'update-cart',
                        method: 'PUT',
                        body: data
                    }
                },
                invalidatesTags: ['carts']   
            }),
            deleteCart: builder.mutation({
                query: (data) => {
                    return {
                        url: 'delete-cart',
                        method: 'DELETE',
                        body: data
                    }
                },
                invalidatesTags: ['carts']  
            }),
            getCart: builder.query({
                query: (id) => {
                    return {
                        url: `fetch-cart/${id}`,
                        method: 'GET'
                    }
                },
                providesTags: ['carts']
            }),
            getTotal: builder.query({
                query: (id) => {
                    return {
                        url: `fetch-total/${id}`,
                        method: 'GET'
                    }
                },
                providesTags: ['carts']
            })
        }
    }
})

export const { useAddCartMutation, useAddNewCartMutation, useUpdateCartMutation, useDeleteCartMutation, useGetCartQuery, useGetTotalQuery } = cartService;
export default cartService;