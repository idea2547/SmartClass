import { createAdminClient } from '$lib/pocketbase';

export const load = async () => {
    const pb = await createAdminClient();
    const affiliates = await pb.collection('affiliate').getFullList();
    console.log('get affiliate succeed')
    return {
        affiliates: JSON.stringify(affiliates)
    };
};