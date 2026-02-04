import { env } from '$env/dynamic/private';
import { addGuest } from '$lib/sheets';

import type { Actions } from './$types';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        let password = data.get('password');
        let name = data.get('name') || '';
        let phoneNumber = data.get('phoneNumber') || '';
        let email = data.get('email') || '';
        let foodPreference = data.get('foodPreference') || '';
        let other = data.get('other') || '';

        if (password == env.FORM_PASSWORD) {
            await addGuest({
                name: name.toString(),
                phoneNumber: phoneNumber.toString(),
                email: email.toString(),
                foodPreference: foodPreference.toString(),
                other: other.toString()
            });
            return { success: true, person: name.toString() };
        } else {
            return {
                wrongPassword: true,
                name: name.toString(),
                phoneNumber: phoneNumber.toString(),
                email: email.toString(),
                foodPreference: foodPreference.toString(),
                other: other.toString(),
                password: password?.toString() ?? ''
            };
        }
    }
} satisfies Actions;
