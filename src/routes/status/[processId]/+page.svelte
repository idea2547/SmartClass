<script>
  export let params;

  // Sample data representing the current status of the process
  let status = {
    currentStep: 2,
    estimatedTime: "15:00 PM",
    steps: [
      { id: 1, label: "Preparing Equipment", completed: true },
      { id: 2, label: "Heading to Location", completed: false },
      { id: 3, label: "Ready to Use", completed: false },
      { id: 4, label: "Completed", completed: false }
    ],
    contact: {
      name: "คุณ วสันต์",
      phone: "099-xxx-xxxx",
      avatar: "/images/user_avatar.png"
    }
  };
</script>

<div class="p-4 md:p-6 max-w-3xl mx-auto">
  <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">สถานะงาน</h2>

  <!-- Current Status Box -->
  <div class="mb-6 md:mb-8 p-4 md:p-6 bg-blue-50 rounded-lg shadow-md">
    <h3 class="font-bold text-lg md:text-xl mb-2 md:mb-4 text-gray-800">Current Status</h3>
    <p class="text-gray-700 text-sm md:text-base">
      Ready to use at <span class="font-semibold text-blue-600">{status.estimatedTime}</span>
    </p>
  </div>

  <!-- Progress Indicator Section -->
  <div class="mb-6 md:mb-8 p-4 md:p-6 bg-white rounded-lg shadow-md">
    <h3 class="font-bold text-lg md:text-xl mb-4 md:mb-6">Progress Steps</h3>
    <div class="flex flex-wrap md:flex-nowrap items-center justify-between space-y-4 md:space-y-0 space-x-0 md:space-x-6">
      {#each status.steps as step, index}
        <div class="flex flex-col items-center w-full md:w-auto">
          <div class={`w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center border-2 
            ${step.completed ? 'bg-green-500 border-green-600 text-white' 
            : index === status.currentStep - 1 ? 'bg-blue-500 border-blue-600 text-white' 
            : 'bg-gray-300 border-gray-400 text-gray-600'}`}>
            {index + 1}
          </div>
          <p class="mt-2 text-center text-xs md:text-sm font-medium">{step.label}</p>
        </div>
        {#if index < status.steps.length - 1}
          <div class="hidden md:block flex-1 h-1 ${index < status.currentStep - 1 ? 'bg-green-500' : 'bg-gray-300'}"></div>
        {/if}
      {/each}
    </div>
  </div>

  <!-- Contact Information Section -->
  <div class="p-4 md:p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
    <img src={status.contact.avatar} alt="User Avatar" class="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md">
    <div class="text-center md:text-left">
      <h3 class="font-bold text-lg md:text-xl">{status.contact.name}</h3>
      <p class="text-gray-600 text-sm md:text-base">Phone: {status.contact.phone}</p>
    </div>
    <div class="ml-0 md:ml-auto text-gray-600 flex flex-col items-center md:items-end">
      <i class="material-icons text-3xl md:text-4xl mb-1 md:mb-2">schedule</i>
      <span class="font-medium text-sm md:text-base">{status.estimatedTime}</span>
    </div>
  </div>
</div>

<style>
  .material-icons {
    font-size: 24px;
  }
</style>
