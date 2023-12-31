import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



// export const api = createApi({
//     baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5001" }),
//     reducerPath:"adminApi",
//     tagTypes:["User"],
//     endpoints: (build)=>({
//         getUser: build.query({
//            query:(id) =>`general/user/${id}`,
//            providesTags:["User"],
//         }),


//     })

// });

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5001/" }),
    reducerPath: "adminApi",
    tagTypes:["User","Products","Customers","Transctions","Geography"],
    endpoints: (build)=>({
        getUser: build.query({
           query:(id) =>`sample/${id}`,
           
        }),
        getProducts: build.query({
            query: ()=> "client/products",
            providesTags: ["Products"],
        }),
        getCustomers: build.query({
            query: ()=> "client/customers",
            providesTags: ["Customers"],
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search })=> ({
                url: "client/transactions",
                method: "GET",
                params: { page, pageSize, sort, search },
            }),
            providesTags:["Transctions"],
            
        }),
        getGeography: build.query(
            {
                query:()=>"client/geography",
                providesTags:["Geography"],
            }
        ),

    }),

});




export const {useGetUserQuery,useGetProductsQuery,useGetCustomersQuery,useGetTransactionsQuery, useGetGeographyQuery} = api;