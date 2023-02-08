/*
 *  Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 *  WSO2 LLC. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

const FRONTEND_SVC_URL = 'https://293dc9ec-db8f-4273-88da-ad2b09c7c170-dev.e1-us-east-azure.choreoapis.dev/qxzw/frontend/1.0.0';

export async function getAllQuotes() {
    const response = await fetch(`${FRONTEND_SVC_URL}/quotes.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
    }

    const transformedQuotes = [];

    for (const key in data) {
        const quoteObj = {
            id: key,
            ...data[key]
        };

        transformedQuotes.push(quoteObj);
    }

    return transformedQuotes;
}

export async function getHomePage() {
    const response = await fetch(`${FRONTEND_SVC_URL}`, {headers: {
        'API-Key': 'eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJlYTY2YWZlZC1iMjljLTQ5YjctODYyYi04YWE5YTBmNWEzN2NAY2FyYm9uLnN1cGVyIiwiaXNzIjoiaHR0cHM6XC9cL3N0cy5jaG9yZW8uZGV2OjQ0M1wvb2F1dGgyXC90b2tlbiIsImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJmcm9udGVuZCIsImNvbnRleHQiOiJcLzI5M2RjOWVjLWRiOGYtNDI3My04OGRhLWFkMmIwOWM3YzE3MFwvcXh6d1wvZnJvbnRlbmRcLzEuMC4wIiwicHVibGlzaGVyIjoiY2hvcmVvX3Byb2RfYXBpbV9hZG1pbiIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOm51bGx9XSwiZXhwIjoxNjc1ODc4MzgwLCJ0b2tlbl90eXBlIjoiSW50ZXJuYWxLZXkiLCJpYXQiOjE2NzU4MTgzODAsImp0aSI6Ijk2OGU5OTliLWU1NzEtNGE5Yy05MjhhLTM3YzJmYzBkYTgyOSJ9.SUi4fy5EogJWfOBhi31FDcjMeahPnF-MZQEzGeci-N0aqV-oA3BbiFVfzq1Exz6sP3exob43cAwgyMMJTtuHzz3uSD_besPVHdzYhCizYJi-dIIRzVxtAWxfeKa6NXGQLnY4_fr7kzPJ1UGYkbaNrfqb2j_YtPnb0K0EEeD8yNAeR_Q1TU5MipQGR67i31UFMRdfA_OgDpgrzyfxc2JE9ZRM64XXrW98cB_yMIy6sKUpoGM3y4mO1qdSmQljzJRsVdDOitePl7_IcpUX8tIMM_-ITogY75gtZ085eevROoFup8AQfze8i5dVK_zAUFYcaeSyLs7Wxc7FCZItUUosUP-MJ0akAFYwOG_I9HJV7L7bbGUtEahua6FRv-C6skJFpU_uvb7hp8H9TF5peRqcSrjYh70RS6MykJjUMd7dHTIrxogKvovLMcwFiqYixd1PK77H5BahVJz6Tk0pt04iD3Ps8PmKnvvXA-C8Kgj83L8IfSqFoinIAHgJiZurnpFpGGivshf5XUayN9UcPrvAQT4tnP14mfXXoW3caxB7kVawb-OMFcwMajgH4BWHCnQs6Lq5oV44wEsDOD3RB-8R-Bxq9zigcIdaigx_H24vJS6kXtSErtWYkFFIdiQsScAciM0SzDmNsXW4cPyudcRbWWtdgRMUSCVYm1seIKZxjMg'
    }});
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        throw new Error(data.message || 'Could not get home page.');
    }

    return data;
}

export async function getSingleProduct(productId) {
    const response = await fetch(`${FRONTEND_SVC_URL}/product/${productId}`, { credentials: 'include' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not get the product.');
    }

    return data;
}

export async function addProductToCart(requestData) {
    const response = await fetch(`${FRONTEND_SVC_URL}/cart/`, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not product to cart.');
    }

    return { };
}

export async function getCartPage() {
    const response = await fetch(`${FRONTEND_SVC_URL}/cart`, { credentials: 'include' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not get the cart.');
    }

    return data;
}

export async function checkout(requestData) {
    const response = await fetch(`${FRONTEND_SVC_URL}/cart/checkout`, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not checkout.');
    }

    return data;
}

export async function changeCurrency(requestData) {
    const response = await fetch(`${FRONTEND_SVC_URL}/setCurrency`, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not change currency.');
    }

    return data;
}

export async function getMetadata() {
    const response = await fetch(`${FRONTEND_SVC_URL}/metadata`, { credentials: 'include' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not get metadata.');
    }

    return data;
}

export async function emptyCart() {
    const response = await fetch(`${FRONTEND_SVC_URL}/cart/empty`, { credentials: 'include', method: 'POST' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not empty the cart.');
    }

    return data;
}
