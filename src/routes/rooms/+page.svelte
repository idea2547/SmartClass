<script>
    // Mocked data for rooms
    let rooms = [
      { id: 1, name: "Room 101", status: "Active", devicesCount: 4 },
      { id: 2, name: "Room 102", status: "Maintenance", devicesCount: 3 },
      { id: 3, name: "Room 103", status: "Active", devicesCount: 5 },
    ];
  </script>
  
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-4xl font-bold mb-10">Rooms Overview</h1>
  
    <!-- Rooms List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each rooms as room}
        <div class="card p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out">
          <div class="card-body">
            <h3 class="font-bold text-2xl mb-4">{room.name}</h3>
            <p class="text-gray-600 mb-2">Status: <span class={`font-semibold ${room.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{room.status}</span></p>
            <p class="text-gray-600 mb-6">Devices: {room.devicesCount}</p>
            <a href={`/rooms/${room.id}`} class="btn btn-primary">Manage Room</a>
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
  