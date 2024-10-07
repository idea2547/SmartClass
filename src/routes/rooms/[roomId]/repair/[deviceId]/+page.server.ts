import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

// Load function to handle initial server-side data (if needed)
export const load: PageServerLoad = async ({ params }) => {
  // You could load relevant data here, e.g., device details
  return {
    roomId: params.roomId,
    deviceId: params.deviceId,
  };
};

export const actions: Actions = {
  repair: async ({ request, params }) => {
    const formData = await request.formData();
    const description = formData.get('description');

    if (!description || typeof description !== 'string') {
      return fail(400, { error: 'Description is required', values: { description } });
    }

    // Simulate saving to a database (replace with real logic as needed)
    console.log(`Submitting repair request for device: ${params.deviceId}`);
    console.log(`Description: ${description}`);

    // If successful, redirect to the success page
    throw redirect(303, `/rooms/${params.roomId}/success`);
  }
};
