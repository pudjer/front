import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BackendUrl} from "../domainname";
import {IGraph, INode} from "../../models/Branch";


export const branchApi = createApi({
    reducerPath: 'branchAPI',
    baseQuery: fetchBaseQuery({baseUrl: BackendUrl}),
    endpoints: (build) => ({

        fetchBranch: build.query<IGraph, string>({
            query: (slug) => ({
                url: 'nodes/node/'+slug+'/show_branch/'
            })
        }),
        fetchreBranch: build.query<IGraph, string>({
            query: (slug) => ({
                url: 'nodes/node/'+slug+'/show_rebranch/'
            })
        }),

        fetchNode: build.query<INode, string>({
            query: (slug) => ({
                url: 'nodes/node/'+slug+'/'
            })
        }),

        createNode: build.mutation<INode, INode>({
                query: (body) => ({
                    url: `node/`,
                    method: 'POST',
                    body,
                }),
        })
    })

})