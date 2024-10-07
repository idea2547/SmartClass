<script lang="ts">
    import { enhance } from '$app/forms';
    export let data;
  
    let repairDetails = {
      description: data?.values?.description || ""
    };
  
    let submitting = false;
  
    let form;
  </script>
  
  <div class="p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
    <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">Report Repair for Device #{data.deviceId}</h2>
  
    {#if data?.error}
      <div class="alert alert-error mb-6 p-4 rounded-lg bg-red-100 text-red-600 border-l-4 border-red-500">
        <span>{data.error}</span>
      </div>
    {/if}
  
    <form use:enhance method="post" action="?/repair" bind:this={form} class="space-y-6">
      <div class="form-control">
        <label class="label text-lg font-semibold text-gray-700">Issue Description</label>
        <textarea 
          name="description"
          bind:value={repairDetails.description}
          class="textarea textarea-bordered p-4 rounded-md w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Describe the issue..."
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-full py-3 text-lg font-semibold tracking-wide" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  </div>
  
  <style>
    textarea {
      resize: vertical;
    }
  </style>
  