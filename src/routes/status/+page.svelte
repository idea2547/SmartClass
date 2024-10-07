<script>
    // Mocked data representing ongoing statuses
    let statuses = [
      {
        id: 1,
        room: "Room 101",
        device: "Projector",
        currentStep: "Heading to Location",
        estimatedTime: "15:00 PM"
      },
      {
        id: 2,
        room: "Room 102",
        device: "Lighting",
        currentStep: "Preparing Equipment",
        estimatedTime: "16:00 PM"
      },
      {
        id: 3,
        room: "Room 103",
        device: "Air Conditioning",
        currentStep: "Repair In Progress",
        estimatedTime: "17:00 PM"
      }
    ];
  </script>
  
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-4xl font-bold mb-10">Ongoing Statuses Overview</h1>
  
    <!-- Status Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each statuses as status}
        <div class="card p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out">
          <div class="card-body">
            <h3 class="font-bold text-2xl mb-2">{status.room} - {status.device}</h3>
            <p class="text-gray-600 mb-2">Current Step: <span class="font-semibold text-blue-600">{status.currentStep}</span></p>
            <p class="text-gray-600">Estimated Time: <span class="font-semibold text-blue-600">{status.estimatedTime}</span></p>
            <div class="mt-4">
              <a href={`/status/${status.id}`} class="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .card {
      cursor: pointer;
    }
  </style>
  