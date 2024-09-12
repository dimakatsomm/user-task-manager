/* tslint:disable */
/* eslint-disable */
/**
 * User Task Manager API
 * A simple API to manage users and tasks.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dimakatsomm@icloud.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface Task
 */
export interface Task {

    /**
     * @type {string}
     * @memberof Task
     */
    id?: string;

    /**
     * @type {string}
     * @memberof Task
     */
    name?: string;

    /**
     * @type {string}
     * @memberof Task
     */
    description?: string;

    /**
     * @type {Date}
     * @memberof Task
     */
    createdAt?: Date;

    /**
     * @type {string}
     * @memberof Task
     */
    status?: TaskStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum TaskStatusEnum {
    PENDING = 'PENDING',
    INPROGRESS = 'IN PROGRESS',
    DONE = 'DONE'
}

