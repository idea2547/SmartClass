<script>
  let actions = [
    { id: 1, title: "Manage Rooms", description: "Control devices and manage settings for each room", link: "/rooms", icon: "settings" },
    { id: 2, title: "Your Schedule", description: "View and manage your schedule", link: "/schedule", icon: "calendar_today" },
    { id: 3, title: "Repair Status", description: "Check the status of ongoing repairs", link: "/status", icon: "build" }
  ];

  let ongoingRepairs = [
    { id: 1, room: "Room 101", device: "Projector", status: "Needs Repair", time: "15:00 PM" },
    { id: 2, room: "Room 102", device: "Lighting", status: "Repair In Progress", time: "14:00 PM" }
  ];
</script>

<div class="p-6 max-w-5xl mx-auto">
  <!-- Welcome Header -->
  <h1 class="text-4xl font-bold mb-10 text-center">Welcome to Smart Classes</h1>

  <!-- Quick Actions -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {#each actions as action}
      <div class="card p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out">
        <div class="card-body">
          <div class="flex items-center mb-4">
            <i class="material-icons text-3xl mr-4">{action.icon}</i>
            <h3 class="font-bold text-xl">{action.title}</h3>
          </div>
          <p class="text-gray-600 mb-6">{action.description}</p>
          <a href={action.link} class="btn btn-primary">Go to {action.title}</a>
        </div>
      </div>
    {/each}
  </div>

  <!-- Ongoing Repairs Overview -->
  <div class="mb-12 p-6 bg-white rounded-lg shadow-md">
    <h3 class="font-bold text-2xl mb-6">Ongoing Repairs</h3>
    <div class="space-y-4">
      {#each ongoingRepairs as repair}
        <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <div>
            <h4 class="font-semibold">{repair.room} - {repair.device}</h4>
            <p class="text-gray-600">{repair.status}</p>
          </div>
          <div class="text-gray-600 flex items-center">
            <i class="material-icons text-xl mr-2">schedule</i>
            <span>{repair.time}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Navigation Buttons (Optional) -->
  <div class="flex justify-around p-4 bg-white rounded-lg shadow-md">
    <a href="/rooms" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-3xl mb-1">settings</span>
      <span>Rooms</span>
    </a>
    <a href="/schedule" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-3xl mb-1">calendar_today</span>
      <span>Schedule</span>
    </a>
    <a href="/status" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-3xl mb-1">build</span>
      <span>Status</span>
    </a>
    <a href="/profile" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-3xl mb-1">person</span>
      <span>Profile</span>
    </a>
  </div>
</div>

<style>
  .material-icons {
    font-size: 24px;
  }

  .card {
    cursor: pointer;
  }
</style>
