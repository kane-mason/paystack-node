/**
 * Paystack
 * The OpenAPI specification of the Paystack API that merchants and developers can harness to build financial solutions in Africa.
 *
 * The version of the Paystack Node library: 1.0.0
 * Contact: techsupport@paystack.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BaseAPI } from '../runtime';
import { Response } from '../models';
export interface ChargeAuthorizationRequest {
    email: string;
    amount: number;
    authorization_code: string;
    reference?: string;
    currency?: string;
    metadata?: string;
    split_code?: string;
    subaccount?: string;
    transaction_charge?: string;
    bearer?: string;
    queue?: boolean;
}
export interface CheckAuthorizationRequest {
    email: string;
    amount: number;
    authorization_code?: string;
    currency?: string;
}
export interface DownloadRequest {
    perPage?: number;
    page?: number;
    from?: Date;
    to?: Date;
}
export interface EventRequest {
    id: string;
}
export interface FetchRequest {
    id: string;
}
export interface InitializeRequest {
    email: string;
    amount: number;
    label?: string;
    currency?: string;
    reference?: string;
    callback_url?: string;
    plan?: string;
    invoice_limit?: number;
    metadata?: string;
    channels?: Array<string>;
    split_code?: string;
    subaccount?: string;
    transaction_charge?: string;
    bearer?: string;
}
export interface ListRequest {
    perPage?: number;
    page?: number;
    from?: Date;
    to?: Date;
}
export interface PartialDebitRequest {
    email: string;
    amount: number;
    authorization_code: string;
    currency: string;
    reference?: string;
    at_least?: string;
}
export interface SessionRequest {
    id: string;
}
export interface TimelineRequest {
    id_or_reference: string;
}
export interface TotalsRequest {
    perPage?: number;
    page?: number;
    from?: Date;
    to?: Date;
}
export interface VerifyRequest {
    reference: string;
}
/**
 *
 */
export declare class Transaction extends BaseAPI {
    /**
     * Charge Authorization
     */
    chargeAuthorization(requestParameters: ChargeAuthorizationRequest): Promise<Response>;
    /**
     * Check Authorization
     */
    checkAuthorization(requestParameters: CheckAuthorizationRequest): Promise<Response>;
    /**
     * Export Transactions
     */
    download(requestParameters: DownloadRequest): Promise<Response>;
    /**
     * Get Transaction Event
     */
    event(requestParameters: EventRequest): Promise<Response>;
    /**
     * Fetch a transaction to get its details
     * Fetch Transaction
     */
    fetch(requestParameters: FetchRequest): Promise<Response>;
    /**
     * Create a new transaction
     * Initialize Transaction
     */
    initialize(requestParameters: InitializeRequest): Promise<Response>;
    /**
     * List transactions that has occurred on your integration
     * List Transactions
     */
    list(requestParameters: ListRequest): Promise<Response>;
    /**
     * Partial Debit
     */
    partialDebit(requestParameters: PartialDebitRequest): Promise<Response>;
    /**
     * Get Transaction Session
     */
    session(requestParameters: SessionRequest): Promise<Response>;
    /**
     * Get the details about the lifecycle of a transaction from initiation to completion
     * Fetch Transaction Timeline
     */
    timeline(requestParameters: TimelineRequest): Promise<Response>;
    /**
     * Get the total amount of all transactions
     * Transaction Totals
     */
    totals(requestParameters: TotalsRequest): Promise<Response>;
    /**
     * Verify a previously initiated transaction using it\'s reference
     * Verify Transaction
     */
    verify(requestParameters: VerifyRequest): Promise<Response>;
}
