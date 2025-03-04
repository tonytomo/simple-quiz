<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="max-w-md rounded bg-white p-8 text-center shadow-lg">
		<h1 class="mb-4 text-6xl font-bold text-red-500">
			{page.status}
		</h1>
		<p class="mb-6 text-xl text-gray-700">
			{page.error?.message}
		</p>
		<a
			href="/"
			class="rounded bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
		>
			Go Home
		</a>
	</div>
</div>
