<script lang="ts">
  let count = $state<number>(0);

  function increment() {
    count += 1;
  }
</script>

<button
  type="button"
  class="inline-flex cursor-pointer border px-2 py-1"
  onclick={increment}
>
  Count: {count}
</button>
