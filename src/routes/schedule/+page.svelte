<script>
    let lessonsToday = [
      { id: 1, title: "การบริหารจัดการ", time: "09:00 AM", status: "เข้าร่วม" },
      { id: 2, title: "โครงการพัฒนา", time: "11:00 AM", status: "เข้าร่วม" }
    ];
  
    let lessonsUpcoming = [
      { id: 3, title: "การศึกษาและวิจัย", time: "02:00 PM", status: "รอเข้าเรียน" }
    ];
  </script>
  
  <div class="p-6">
    <h2 class="text-3xl font-bold mb-6">การเรียนที่ต้องเข้าร่วม</h2>
  
    <!-- Lessons for Today -->
    <div class="mb-8">
      <h3 class="font-bold text-xl mb-4">วันนี้</h3>
      <ul class="list-none space-y-4">
        {#each lessonsToday as lesson}
          <li class="mb-4">
            <a href={`/lessons/${lesson.id}`} class="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">{lesson.title}</h3>
                  <p class="text-gray-600 text-sm">{lesson.time}</p>
                </div>
                <span class="badge badge-warning text-sm px-3 py-1 rounded-full">{lesson.status}</span>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- Separator -->
    <div class="border-t border-dashed border-gray-300 mb-8"></div>
  
    <!-- Upcoming Lessons -->
    <div>
      <h3 class="font-bold text-xl mb-4">วันถัดไป</h3>
      <ul class="list-none space-y-4">
        {#each lessonsUpcoming as lesson}
          <li class="mb-4">
            <a href={`/lessons/${lesson.id}`} class="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out">
              <div class="flex justify-between items-center">
                <div>
                  <h3 class="font-bold text-lg">{lesson.title}</h3>
                  <p class="text-gray-600 text-sm">{lesson.time}</p>
                </div>
                <span class="badge badge-success text-sm px-3 py-1 rounded-full">{lesson.status}</span>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  
  <!-- Bottom Navigation Bar -->
  <div class="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-inner flex justify-around border-t border-gray-200">
    <a href="/" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-2xl mb-1">home</span>
      <span>Home</span>
    </a>
    <a href="/contact" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-2xl mb-1">contact_mail</span>
      <span>ติดต่อ</span>
    </a>
    <a href="/news" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-2xl mb-1">article</span>
      <span>ข่าว</span>
    </a>
    <a href="/profile" class="flex flex-col items-center text-sm hover:text-gray-800 transition duration-200">
      <span class="material-icons text-2xl mb-1">person</span>
      <span>โปรไฟล์</span>
    </a>
  </div>
  
  <style>
    .material-icons {
      font-size: 24px;
    }
  
    .badge-warning {
      background-color: #fbbf24;
      color: white;
    }
  
    .badge-success {
      background-color: #22c55e;
      color: white;
    }
  </style>
  