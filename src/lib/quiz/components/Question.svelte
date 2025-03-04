<script lang="ts">
	import { theme } from '$lib/theme/theme';

	export let question: string;
	export let options: string[];
	export let selectedAnswer: string | null;
	export let onAnswer: (answer: string) => void;
</script>

<div class={theme.container.card + ' w-full'}>
	<h2 class={theme.text.question}>
		{question}
	</h2>
	<ul class="space-y-1">
		{#each options as option}
			<li>
				<label class={theme.input.radioLabel}>
					<input
						type="radio"
						name="answer"
						value={option}
						bind:group={selectedAnswer}
						on:change={() => onAnswer(option)}
						class={theme.input.radioInput}
					/>
					<span class="text-gray-700">{option}</span>
				</label>
			</li>
		{/each}
	</ul>
</div>
