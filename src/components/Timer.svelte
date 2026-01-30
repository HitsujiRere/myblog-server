<script lang="ts">
  let count = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      count += 1;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="inline-flex cursor-pointer border px-2 py-1">
  Timer: {count}
</div>
