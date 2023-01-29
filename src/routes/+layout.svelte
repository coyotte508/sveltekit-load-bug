<script lang="ts">
  import { page } from "$app/stores"
</script>

<div style="flex">
  <a href="/">Index</a>
  <a href="/custom-page">Custom</a>
</div>

<div style="margin-top: 1rem; margin-bottom: 1rem;">
  <b>Title:</b> {$page.data.title}
</div>

<slot/>