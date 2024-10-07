<script>
    let products = [
      { id: 1, name: 'Product A', link: 'https://affiliate-link.com/a' },
      { id: 2, name: 'Product B', link: 'https://affiliate-link.com/b' },
    ];
  </script>
  
  <section class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Affiliate Products</h1>
    <ul>
      {#each products as product}
        <li class="border p-4 mb-4 rounded-md">
          <div class="flex justify-between items-center">
            <span>{product.name}</span>
            <a href={product.link} target="_blank" class="btn btn-secondary">Visit</a>
          </div>
        </li>
      {/each}
    </ul>
  </section>