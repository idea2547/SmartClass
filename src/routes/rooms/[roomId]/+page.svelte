<script>
    // This will load `roomId` from the `load` function in +page.js
    export let data;

    let roomId = data.roomId;

    let filters = ["All Devices", "Lighting", "Projector", "Air"];
    let activeFilter = "All Devices";
    let devices = [
        { id: 1, name: "Light 1", type: "Lighting", status: "off", needsRepair: false },
        { id: 2, name: "Projector", type: "Projector", status: "on", needsRepair: true },
        // Add more devices as needed...
    ];

    let filteredDevices = devices;

    function filterDevices(filter) {
        activeFilter = filter;
        if (filter === "All Devices") {
            filteredDevices = devices;
        } else {
            filteredDevices = devices.filter((device) => device.type === filter);
        }
    }

    function toggleDevice(device) {
        device.status = device.status === 'on' ? 'off' : 'on';
    }
</script>

<div class="p-4">
    <h2 class="text-xl font-bold mb-4">Manage Room: Room #{roomId}</h2>

    <div class="tabs mb-4">
        {#each filters as filter}
            <button
                class={`tab tab-bordered ${filter === activeFilter ? 'tab-active' : ''}`}
                on:click={() => filterDevices(filter)}
            >
                {filter}
            </button>
        {/each}
    </div>

    <div class="grid grid-cols-1 gap-4">
        {#each filteredDevices as device}
            <div class="card shadow-lg">
                <div class="card-body">
                    <h3 class="card-title">{device.name} ({device.type})</h3>
                    <p>Status: {device.status}</p>
                    {#if device.needsRepair}
                        <div class="badge badge-warning">Needs Repair</div>
                        <a href={`/rooms/${roomId}/repair/${device.id}`} class="btn btn-error mt-2">Contact Technician</a>
                    {/if}
                    <button on:click={() => toggleDevice(device)} class="btn mt-2">
                        {device.status === 'on' ? 'Turn Off' : 'Turn On'}
                    </button>
                </div>
            </div>
        {/each}
    </div>
</div>
