<script>
    let categories = ["All Devices", "Lighting", "Projector", "Air"];
    let activeCategory = "All Devices";
  
    let devices = [
      { id: 1, name: "Light 1", type: "Lighting", status: "off", needsRepair: false },
      { id: 2, name: "Projector", type: "Projector", status: "on", needsRepair: true }
    ];
  
    let filteredDevices = devices;
  
    function filterDevices(category) {
      activeCategory = category;
      filteredDevices = category === "All Devices" ? devices : devices.filter(device => device.type === category);
    }
  
    function toggleDeviceStatus(device) {
      device.status = device.status === 'on' ? 'off' : 'on';
    }
  </script>
  
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-6">Manage Room: Devices</h2>
  
    <!-- Device Filter Tabs -->
    <div class="tabs mb-8">
      {#each categories as category}
        <a
          href="javascript:void(0)"
          class={`tab tab-bordered ${category === activeCategory ? 'tab-active' : ''}`}
          on:click={() => filterDevices(category)}
        >
          {category}
        </a>
      {/each}
    </div>
  
    <!-- Devices List -->
    <div class="grid grid-cols-1 gap-6">
      {#each filteredDevices as device}
        <div class="card bg-white rounded-lg shadow-lg p-6">
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="card-title text-2xl font-semibold mb-2">{device.name} ({device.type})</h3>
                <p class="text-gray-600 mb-4">Status: {device.status}</p>
              </div>
              <button class={`btn ${device.status === 'on' ? 'btn-secondary' : 'btn-primary'}`} on:click={() => toggleDeviceStatus(device)}>
                {device.status === 'on' ? 'Turn Off' : 'Turn On'}
              </button>
            </div>
            {#if device.needsRepair}
              <div class="mt-4">
                <span class="badge badge-warning">Needs Repair</span>
                <a href={`/rooms/${device.id}/repair`} class="btn btn-error ml-4">Contact Technician</a>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
  