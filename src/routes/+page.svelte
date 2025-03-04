<script lang="ts">
	import { goto } from '$app/navigation';
	import { theme } from '$lib/theme/theme';

	function startQuiz() {
		goto('/quiz');
	}
</script>

<svelte:head>
	<title>Main Menu | Svelte Quiz App</title>
	<meta name="description" content="Welcome to the Svelte Quiz App! Choose an option to begin." />
</svelte:head>

<div class={theme.container.page}>
	<div class={theme.container.card + ' text-center'}>
		<h1 class="mb-6 text-3xl font-semibold">Welcome to the Quiz App!</h1>
		<p class="mb-8 text-lg text-gray-700">Choose an option to begin.</p>
		<button on:click={startQuiz} class={theme.button.primary + ' text-lg'}> Start Quiz </button>
	</div>
</div>
