/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export namespace V10 {
    /**
     * @description Shows details for the Database Service API v1.0.
     * @name GetVersionInfo
     * @summary Show version details
     * @request GET:/v1.0
     * @response `202` `void` 202 response
     */
    export namespace GetVersionInfo {
        export type RequestParams = {}
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Creates a database instance.
     * @name CreateInstance
     * @summary Create database instance
     * @request POST:/v1.0/{accountId}/instances
     * @response `200` `void` 200 response
     */
    export namespace CreateInstance {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Lists information, including status, for all database instances.
     * @name GetInstance
     * @summary List database instances
     * @request GET:/v1.0/{accountId}/instances
     * @response `200` `void` 200 response
     */
    export namespace GetInstance {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Shows database instance details.
     * @name GetInstanceById
     * @summary Show database instance details
     * @request GET:/v1.0/{accountId}/instances/{instanceId}
     * @response `200` `void` 200 response
     */
    export namespace GetInstanceById {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Deletes a specified database instance, including any associated data.
     * @name DeleteInstance
     * @summary Delete database instance
     * @request DELETE:/v1.0/{accountId}/instances/{instanceId}
     * @response `202` `void` 202 response
     */
    export namespace DeleteInstance {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Restarts the database service on an instance.
     * @name RestartInstance
     * @summary Restart instance
     * @request POST:/v1.0/{accountId}/instances/{instanceId}/action
     * @response `202` `void` 202 response
     */
    export namespace RestartInstance {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Creates a database within a specified instance.
     * @name CreateDatabase
     * @summary Create database
     * @request POST:/v1.0/{accountId}/instances/{instanceId}/databases
     * @response `202` `void` 202 response
     */
    export namespace CreateDatabase {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Lists databases for a specified instance.
     * @name GetDatabases
     * @summary List instance databases
     * @request GET:/v1.0/{accountId}/instances/{instanceId}/databases
     * @response `200` `void` 200 response
     */
    export namespace GetDatabases {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Deletes a specified database.
     * @name DeleteDatabase
     * @summary Delete database
     * @request DELETE:/v1.0/{accountId}/instances/{instanceId}/databases/{databaseName}
     * @response `202` `void` 202 response
     */
    export namespace DeleteDatabase {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
            /** The name for the specified database. */
            databaseName: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Creates a user for a specified database instance.
     * @name CreateUser
     * @summary Create user
     * @request POST:/v1.0/{accountId}/instances/{instanceId}/users
     * @response `202` `void` 202 response
     */
    export namespace CreateUser {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Lists the users in a specified database instance.
     * @name GetUsers
     * @summary List database instance users
     * @request GET:/v1.0/{accountId}/instances/{instanceId}/users
     * @response `200` `void` 200 response
     */
    export namespace GetUsers {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Deletes a specified user for a specified database instance.
     * @name DeleteUser
     * @summary Delete user
     * @request DELETE:/v1.0/{accountId}/instances/{instanceId}/users/{name}
     * @response `202` `void` 202 response
     */
    export namespace DeleteUser {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
            /** The name for the specified user. */
            name: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Enables the root user for a specified database instance and returns the root password.
     * @name CreateRoot
     * @summary Enable root user
     * @request POST:/v1.0/{accountId}/instances/{instanceId}/root
     * @response `200` `void` 200 response
     */
    export namespace CreateRoot {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Shows root-enabled status for a database instance.
     * @name IsRootEnabled
     * @summary Show root-enabled status for database instance
     * @request GET:/v1.0/{accountId}/instances/{instanceId}/root
     * @response `200` `void` 200 response
     */
    export namespace IsRootEnabled {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The instance ID for the specified database instance. */
            instanceId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Lists information for all available flavors.
     * @name GetFlavors
     * @summary List flavors
     * @request GET:/v1.0/{accountId}/flavors
     * @response `200` `void` 200 response
     */
    export namespace GetFlavors {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }

    /**
     * @description Shows flavor details.
     * @name GetFlavorById
     * @summary Show flavor details
     * @request GET:/v1.0/{accountId}/flavors/{flavorId}
     * @response `200` `void` 200 response
     */
    export namespace GetFlavorById {
        export type RequestParams = {
            /** The account ID of the owner of the specified instance. */
            accountId: string
            /** The flavor ID for the specified flavor. */
            flavorId: string
        }
        export type RequestQuery = {}
        export type RequestBody = never
        export type RequestHeaders = {}
        export type ResponseBody = void
    }
}

import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    HeadersDefaults,
    ResponseType,
} from "axios"
import axios from "axios"

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
    extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean
    /** request path */
    path: string
    /** content type of request body */
    type?: ContentType
    /** query params */
    query?: QueryParamsType
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType
    /** request body */
    body?: unknown
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">

export interface ApiConfig<SecurityDataType = unknown>
    extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (
        securityData: SecurityDataType | null
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
    secure?: boolean
    format?: ResponseType
}

export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance
    private securityData: SecurityDataType | null = null
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"]
    private secure?: boolean
    private format?: ResponseType

    constructor({
        securityWorker,
        secure,
        format,
        ...axiosConfig
    }: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" })
        this.secure = secure
        this.format = format
        this.securityWorker = securityWorker
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data
    }

    protected mergeRequestParams(
        params1: AxiosRequestConfig,
        params2?: AxiosRequestConfig
    ): AxiosRequestConfig {
        const method = params1.method || (params2 && params2.method)

        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method &&
                    this.instance.defaults.headers[
                        method.toLowerCase() as keyof HeadersDefaults
                    ]) ||
                    {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        }
    }

    protected stringifyFormItem(formItem: unknown) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem)
        } else {
            return `${formItem}`
        }
    }

    protected createFormData(input: Record<string, unknown>): FormData {
        if (input instanceof FormData) {
            return input
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key]
            const propertyContent: any[] = property instanceof Array ? property : [property]

            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
            }

            return formData
        }, new FormData())
    }

    public request = async <T = any, _E = any>({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams =
            ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {}
        const requestParams = this.mergeRequestParams(params, secureParams)
        const responseFormat = format || this.format || undefined

        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
            body = this.createFormData(body as Record<string, unknown>)
        }

        if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
            body = JSON.stringify(body)
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        })
    }
}

/**
 * @title dbaas
 * @version Unknown
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * @description Lists information about all Database Service API versions.
     *
     * @name GetVersions
     * @summary List versions
     * @request GET:/
     * @response `200` `void` 200 response
     */
    getVersions = (params: RequestParams = {}) =>
        this.request<void, any>({
            path: `/`,
            method: "GET",
            format: "json",
            ...params,
        })

    v10 = {
        /**
         * @description Shows details for the Database Service API v1.0.
         *
         * @name GetVersionInfo
         * @summary Show version details
         * @request GET:/v1.0
         * @response `202` `void` 202 response
         */
        getVersionInfo: (params: RequestParams = {}) =>
            this.request<void, any>({
                path: "1",
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Creates a database instance.
         *
         * @name CreateInstance
         * @summary Create database instance
         * @request POST:/v1.0/{accountId}/instances
         * @response `200` `void` 200 response
         */
        createInstance: (accountId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances`,
                method: "POST",
                format: "json",
                ...params,
            }),

        /**
         * @description Lists information, including status, for all database instances.
         *
         * @name GetInstance
         * @summary List database instances
         * @request GET:/v1.0/{accountId}/instances
         * @response `200` `void` 200 response
         */
        getInstance: (accountId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Shows database instance details.
         *
         * @name GetInstanceById
         * @summary Show database instance details
         * @request GET:/v1.0/{accountId}/instances/{instanceId}
         * @response `200` `void` 200 response
         */
        getInstanceById: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Deletes a specified database instance, including any associated data.
         *
         * @name DeleteInstance
         * @summary Delete database instance
         * @request DELETE:/v1.0/{accountId}/instances/{instanceId}
         * @response `202` `void` 202 response
         */
        deleteInstance: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}`,
                method: "DELETE",
                ...params,
            }),

        /**
         * @description Restarts the database service on an instance.
         *
         * @name RestartInstance
         * @summary Restart instance
         * @request POST:/v1.0/{accountId}/instances/{instanceId}/action
         * @response `202` `void` 202 response
         */
        restartInstance: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/action`,
                method: "POST",
                ...params,
            }),

        /**
         * @description Creates a database within a specified instance.
         *
         * @name CreateDatabase
         * @summary Create database
         * @request POST:/v1.0/{accountId}/instances/{instanceId}/databases
         * @response `202` `void` 202 response
         */
        createDatabase: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/databases`,
                method: "POST",
                ...params,
            }),

        /**
         * @description Lists databases for a specified instance.
         *
         * @name GetDatabases
         * @summary List instance databases
         * @request GET:/v1.0/{accountId}/instances/{instanceId}/databases
         * @response `200` `void` 200 response
         */
        getDatabases: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/databases`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Deletes a specified database.
         *
         * @name DeleteDatabase
         * @summary Delete database
         * @request DELETE:/v1.0/{accountId}/instances/{instanceId}/databases/{databaseName}
         * @response `202` `void` 202 response
         */
        deleteDatabase: (
            accountId: string,
            instanceId: string,
            databaseName: string,
            params: RequestParams = {}
        ) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/databases/${databaseName}`,
                method: "DELETE",
                ...params,
            }),

        /**
         * @description Creates a user for a specified database instance.
         *
         * @name CreateUser
         * @summary Create user
         * @request POST:/v1.0/{accountId}/instances/{instanceId}/users
         * @response `202` `void` 202 response
         */
        createUser: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/users`,
                method: "POST",
                ...params,
            }),

        /**
         * @description Lists the users in a specified database instance.
         *
         * @name GetUsers
         * @summary List database instance users
         * @request GET:/v1.0/{accountId}/instances/{instanceId}/users
         * @response `200` `void` 200 response
         */
        getUsers: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/users`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Deletes a specified user for a specified database instance.
         *
         * @name DeleteUser
         * @summary Delete user
         * @request DELETE:/v1.0/{accountId}/instances/{instanceId}/users/{name}
         * @response `202` `void` 202 response
         */
        deleteUser: (
            accountId: string,
            instanceId: string,
            name: string,
            params: RequestParams = {}
        ) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/users/${name}`,
                method: "DELETE",
                ...params,
            }),

        /**
         * @description Enables the root user for a specified database instance and returns the root password.
         *
         * @name CreateRoot
         * @summary Enable root user
         * @request POST:/v1.0/{accountId}/instances/{instanceId}/root
         * @response `200` `void` 200 response
         */
        createRoot: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/root`,
                method: "POST",
                format: "json",
                ...params,
            }),

        /**
         * @description Shows root-enabled status for a database instance.
         *
         * @name IsRootEnabled
         * @summary Show root-enabled status for database instance
         * @request GET:/v1.0/{accountId}/instances/{instanceId}/root
         * @response `200` `void` 200 response
         */
        isRootEnabled: (accountId: string, instanceId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/instances/${instanceId}/root`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Lists information for all available flavors.
         *
         * @name GetFlavors
         * @summary List flavors
         * @request GET:/v1.0/{accountId}/flavors
         * @response `200` `void` 200 response
         */
        getFlavors: (accountId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/flavors`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Shows flavor details.
         *
         * @name GetFlavorById
         * @summary Show flavor details
         * @request GET:/v1.0/{accountId}/flavors/{flavorId}
         * @response `200` `void` 200 response
         */
        getFlavorById: (accountId: string, flavorId: string, params: RequestParams = {}) =>
            this.request<void, any>({
                path: `/v1.0/${accountId}/flavors/${flavorId}`,
                method: "GET",
                format: "json",
                ...params,
            }),
    }
}
