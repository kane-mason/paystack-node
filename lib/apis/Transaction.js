"use strict";
/* tslint:disable */
/* eslint-disable */
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const runtime_1 = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class Transaction extends runtime_1.BaseAPI {
    /**
     * Charge Authorization
     */
    chargeAuthorization(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.email === null || requestParameters.email === undefined) {
                throw new runtime_1.RequiredError('email', 'Required parameter email was null or undefined when calling chargeAuthorization.');
            }
            if (requestParameters.amount === null || requestParameters.amount === undefined) {
                throw new runtime_1.RequiredError('amount', 'Required parameter amount was null or undefined when calling chargeAuthorization.');
            }
            if (requestParameters.authorization_code === null || requestParameters.authorization_code === undefined) {
                throw new runtime_1.RequiredError('authorization_code', 'Required parameter authorization_code was null or undefined when calling chargeAuthorization.');
            }
            const queryParameters = {};
            let formParams = {};
            if (requestParameters.email !== undefined) {
                formParams['email'] = requestParameters.email;
            }
            if (requestParameters.amount !== undefined) {
                formParams['amount'] = requestParameters.amount;
            }
            if (requestParameters.authorization_code !== undefined) {
                formParams['authorization_code'] = requestParameters.authorization_code;
            }
            if (requestParameters.reference !== undefined) {
                formParams['reference'] = requestParameters.reference;
            }
            if (requestParameters.currency !== undefined) {
                formParams['currency'] = requestParameters.currency;
            }
            if (requestParameters.metadata !== undefined) {
                formParams['metadata'] = requestParameters.metadata;
            }
            if (requestParameters.split_code !== undefined) {
                formParams['split_code'] = requestParameters.split_code;
            }
            if (requestParameters.subaccount !== undefined) {
                formParams['subaccount'] = requestParameters.subaccount;
            }
            if (requestParameters.transaction_charge !== undefined) {
                formParams['transaction_charge'] = requestParameters.transaction_charge;
            }
            if (requestParameters.bearer !== undefined) {
                formParams['bearer'] = requestParameters.bearer;
            }
            if (requestParameters.queue !== undefined) {
                formParams['queue'] = requestParameters.queue;
            }
            const response = yield this.request({
                path: `/transaction/charge_authorization`,
                method: 'POST',
                query: queryParameters,
                body: formParams,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Check Authorization
     */
    checkAuthorization(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.email === null || requestParameters.email === undefined) {
                throw new runtime_1.RequiredError('email', 'Required parameter email was null or undefined when calling checkAuthorization.');
            }
            if (requestParameters.amount === null || requestParameters.amount === undefined) {
                throw new runtime_1.RequiredError('amount', 'Required parameter amount was null or undefined when calling checkAuthorization.');
            }
            const queryParameters = {};
            let formParams = {};
            if (requestParameters.email !== undefined) {
                formParams['email'] = requestParameters.email;
            }
            if (requestParameters.amount !== undefined) {
                formParams['amount'] = requestParameters.amount;
            }
            if (requestParameters.authorization_code !== undefined) {
                formParams['authorization_code'] = requestParameters.authorization_code;
            }
            if (requestParameters.currency !== undefined) {
                formParams['currency'] = requestParameters.currency;
            }
            const response = yield this.request({
                path: `/transaction/check_authorization`,
                method: 'POST',
                query: queryParameters,
                body: formParams,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Export Transactions
     */
    download(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.perPage !== undefined) {
                queryParameters['perPage'] = requestParameters.perPage;
            }
            if (requestParameters.page !== undefined) {
                queryParameters['page'] = requestParameters.page;
            }
            if (requestParameters.from !== undefined) {
                queryParameters['from'] = requestParameters.from.toISOString();
            }
            if (requestParameters.to !== undefined) {
                queryParameters['to'] = requestParameters.to.toISOString();
            }
            const response = yield this.request({
                path: `/transaction/export`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Get Transaction Event
     */
    event(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime_1.RequiredError('id', 'Required parameter id was null or undefined when calling event.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/transaction/{id}/event`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Fetch a transaction to get its details
     * Fetch Transaction
     */
    fetch(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime_1.RequiredError('id', 'Required parameter id was null or undefined when calling fetch.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/transaction/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Create a new transaction
     * Initialize Transaction
     */
    initialize(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.email === null || requestParameters.email === undefined) {
                throw new runtime_1.RequiredError('email', 'Required parameter email was null or undefined when calling initialize.');
            }
            if (requestParameters.amount === null || requestParameters.amount === undefined) {
                throw new runtime_1.RequiredError('amount', 'Required parameter amount was null or undefined when calling initialize.');
            }
            const queryParameters = {};
            let formParams = {};
            if (requestParameters.email !== undefined) {
                formParams['email'] = requestParameters.email;
            }
            if (requestParameters.amount !== undefined) {
                formParams['amount'] = requestParameters.amount;
            }
            if (requestParameters.label !== undefined) {
                formParams['label'] = requestParameters.label;
            }
            if (requestParameters.currency !== undefined) {
                formParams['currency'] = requestParameters.currency;
            }
            if (requestParameters.reference !== undefined) {
                formParams['reference'] = requestParameters.reference;
            }
            if (requestParameters.callback_url !== undefined) {
                formParams['callback_url'] = requestParameters.callback_url;
            }
            if (requestParameters.plan !== undefined) {
                formParams['plan'] = requestParameters.plan;
            }
            if (requestParameters.invoice_limit !== undefined) {
                formParams['invoice_limit'] = requestParameters.invoice_limit;
            }
            if (requestParameters.metadata !== undefined) {
                formParams['metadata'] = requestParameters.metadata;
            }
            if (requestParameters.channels) {
                formParams['channels'] = requestParameters.channels;
            }
            if (requestParameters.split_code !== undefined) {
                formParams['split_code'] = requestParameters.split_code;
            }
            if (requestParameters.subaccount !== undefined) {
                formParams['subaccount'] = requestParameters.subaccount;
            }
            if (requestParameters.transaction_charge !== undefined) {
                formParams['transaction_charge'] = requestParameters.transaction_charge;
            }
            if (requestParameters.bearer !== undefined) {
                formParams['bearer'] = requestParameters.bearer;
            }
            const response = yield this.request({
                path: `/transaction/initialize`,
                method: 'POST',
                query: queryParameters,
                body: formParams,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * List transactions that has occurred on your integration
     * List Transactions
     */
    list(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.perPage !== undefined) {
                queryParameters['perPage'] = requestParameters.perPage;
            }
            if (requestParameters.page !== undefined) {
                queryParameters['page'] = requestParameters.page;
            }
            if (requestParameters.from !== undefined) {
                queryParameters['from'] = requestParameters.from.toISOString();
            }
            if (requestParameters.to !== undefined) {
                queryParameters['to'] = requestParameters.to.toISOString();
            }
            const response = yield this.request({
                path: `/transaction`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Partial Debit
     */
    partialDebit(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.email === null || requestParameters.email === undefined) {
                throw new runtime_1.RequiredError('email', 'Required parameter email was null or undefined when calling partialDebit.');
            }
            if (requestParameters.amount === null || requestParameters.amount === undefined) {
                throw new runtime_1.RequiredError('amount', 'Required parameter amount was null or undefined when calling partialDebit.');
            }
            if (requestParameters.authorization_code === null || requestParameters.authorization_code === undefined) {
                throw new runtime_1.RequiredError('authorization_code', 'Required parameter authorization_code was null or undefined when calling partialDebit.');
            }
            if (requestParameters.currency === null || requestParameters.currency === undefined) {
                throw new runtime_1.RequiredError('currency', 'Required parameter currency was null or undefined when calling partialDebit.');
            }
            const queryParameters = {};
            let formParams = {};
            if (requestParameters.email !== undefined) {
                formParams['email'] = requestParameters.email;
            }
            if (requestParameters.amount !== undefined) {
                formParams['amount'] = requestParameters.amount;
            }
            if (requestParameters.authorization_code !== undefined) {
                formParams['authorization_code'] = requestParameters.authorization_code;
            }
            if (requestParameters.currency !== undefined) {
                formParams['currency'] = requestParameters.currency;
            }
            if (requestParameters.reference !== undefined) {
                formParams['reference'] = requestParameters.reference;
            }
            if (requestParameters.at_least !== undefined) {
                formParams['at_least'] = requestParameters.at_least;
            }
            const response = yield this.request({
                path: `/transaction/partial_debit`,
                method: 'POST',
                query: queryParameters,
                body: formParams,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Get Transaction Session
     */
    session(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime_1.RequiredError('id', 'Required parameter id was null or undefined when calling session.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/transaction/{id}/session`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Get the details about the lifecycle of a transaction from initiation to completion
     * Fetch Transaction Timeline
     */
    timeline(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id_or_reference === null || requestParameters.id_or_reference === undefined) {
                throw new runtime_1.RequiredError('id_or_reference', 'Required parameter id_or_reference was null or undefined when calling timeline.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/transaction/timeline/{id_or_reference}`.replace(`{${"id_or_reference"}}`, encodeURIComponent(String(requestParameters.id_or_reference))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Get the total amount of all transactions
     * Transaction Totals
     */
    totals(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.perPage !== undefined) {
                queryParameters['perPage'] = requestParameters.perPage;
            }
            if (requestParameters.page !== undefined) {
                queryParameters['page'] = requestParameters.page;
            }
            if (requestParameters.from !== undefined) {
                queryParameters['from'] = requestParameters.from.toISOString();
            }
            if (requestParameters.to !== undefined) {
                queryParameters['to'] = requestParameters.to.toISOString();
            }
            const response = yield this.request({
                path: `/transaction/totals`,
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
    /**
     * Verify a previously initiated transaction using it\'s reference
     * Verify Transaction
     */
    verify(requestParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.reference === null || requestParameters.reference === undefined) {
                throw new runtime_1.RequiredError('reference', 'Required parameter reference was null or undefined when calling verify.');
            }
            const queryParameters = {};
            const response = yield this.request({
                path: `/transaction/verify/{reference}`.replace(`{${"reference"}}`, encodeURIComponent(String(requestParameters.reference))),
                method: 'GET',
                query: queryParameters,
            });
            return models_1.ResponseFromJSON(response);
        });
    }
}
exports.Transaction = Transaction;
