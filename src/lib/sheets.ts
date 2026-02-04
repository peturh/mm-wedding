import { env } from '$env/dynamic/private';
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

export interface GuestData {
    name: string;
    phoneNumber: string;
    email: string;
    foodPreference: string;
    other: string;
}

export async function addGuest(guest: GuestData): Promise<void> {
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
        spreadsheetId: env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:F',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [[timestamp, guest.name, guest.phoneNumber, guest.email, guest.foodPreference, guest.other]]
        }
    });
}

