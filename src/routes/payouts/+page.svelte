<script>
  
    export let data;
    let payouts = [];
    let selectedPayout = null;
    let showModal = false;
  
    payouts = JSON.parse(data?.affiliates).map(affiliate => ({
      id: affiliate.id,
      affiliate: affiliate.user,
      amount: affiliate.last_payout_total,
      status: affiliate.status,
      details: `Basic Plan Monthly: ${affiliate.basic_plan_monthly}, Premium Plan Monthly: ${affiliate.premium_plan_monthly}, Ultimate Plan Monthly: ${affiliate.ultimate_plan_monthly}, Basic Plan Yearly: ${affiliate.basic_plan_yearly}, Premium Plan Yearly: ${affiliate.premium_plan_yearly}, Ultimate Plan Yearly: ${affiliate.ultimate_plan_yearly}, User Register: ${affiliate.user_register}`
    }));
  
    function viewDetails(payout) {
      selectedPayout = payout;
      showModal = true;
    }
  </script>
  
  <section class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Affiliate Payouts</h1>
    <ul>
      {#each payouts as payout}
        <li class="border p-4 mb-4 rounded-md">
          <div class="flex justify-between items-center">
            <span>{payout.affiliate} - ${payout.amount} ({payout.status})</span>
            <button class="btn btn-secondary" on:click={() => viewDetails(payout)}>View Details</button>
          </div>
        </li>
      {/each}
    </ul>
  
    {#if showModal}
      <div class="modal modal-open">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Payout Details</h3>
          <p><strong>Affiliate:</strong> {selectedPayout.affiliate}</p>
          <p><strong>Amount:</strong> ${selectedPayout.amount}</p>
          <p><strong>Status:</strong> {selectedPayout.status}</p>
          <p><strong>Details:</strong> {selectedPayout.details}</p>
          <div class="modal-action">
            <button class="btn" on:click={() => { showModal = false; }}>Close</button>
          </div>
        </div>
      </div>
    {/if}
  </section>