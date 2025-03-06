<script lang="ts">
	import { goto } from '$app/navigation';
	import { theme } from '$lib/theme/theme';

	let pageTitle = 'Svelte Quiz App';
	let pageDescription = 'Test your knowledge with this fun Svelte quiz app.';

	function startQuiz() {
		goto('/quiz.html');
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class={theme.container.page}>
	<div class={theme.container.card + ' text-center'}>
		<h1 class="mb-6 text-3xl font-semibold">Welcome to the Quiz App!</h1>
		<p class="mb-8 text-lg text-gray-700">Choose an option to begin.</p>
		<button on:click={startQuiz} class={theme.button.primary + ' text-lg'}> Start Quiz </button>
	</div>
</div>
