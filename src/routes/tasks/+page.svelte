<script>
    let tasks = [
      { id: 1, title: "การจัดการและจัดการ", description: "Course ID: 2023/24 MOTORPRAZARAT0070" },
      { id: 2, title: "โครงการพัฒนา", description: "Course ID: 2104981 ENG PRACTICED" },
      // Add more tasks as needed...
    ];
  </script>
  
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">วิชาที่เรียน</h2>
    <ul class="list-none">
      {#each tasks as task}
        <li class="mb-4">
          <a href={`/tasks/${task.id}`} class="block p-4 bg-pink-100 rounded-md shadow-md hover:bg-pink-200">
            <h3 class="font-bold text-lg">{task.title}</h3>
            <p class="text-sm">{task.description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  