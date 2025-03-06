<script lang="ts">
	import { goto } from '$app/navigation';
	import Question from '$lib/quiz/components/Question.svelte';
	import { quizQuestions } from '$lib/quiz/dummy/questionDummy';
	import { theme } from '$lib/theme/theme';
	import { onMount } from 'svelte';

	let currentQuestionIndex: number = 0;
	let selectedAnswer: string | null = null;
	let score: number = 0;
	let quizCompleted: boolean = false;

	let timeLeft: number;
	let timerInterval: number;

	function handleAnswer(answer: string) {
		selectedAnswer = answer;
	}

	function nextQuestion() {
		if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
			score++;
		}
		selectedAnswer = null;
		currentQuestionIndex++;
		if (currentQuestionIndex >= quizQuestions.length) {
			quizCompleted = true;
			clearInterval(timerInterval);
		}
	}

	function restartQuiz() {
		currentQuestionIndex = 0;
		selectedAnswer = null;
		score = 0;
		quizCompleted = false;
		startTimer();
	}

	function startTimer() {
		timeLeft = quizQuestions.length * 2; // 2 seconds per question
		timerInterval = setInterval(() => {
			timeLeft--;
			if (timeLeft <= 0 || quizCompleted) {
				quizCompleted = true;
				clearInterval(timerInterval);
			}
		}, 1000);
	}

	onMount(() => {
		startTimer();
	});

	$: {
		if (quizCompleted) {
			pageTitle = 'Quiz Completed! | Svelte Quiz App';
			pageDescription = `Your score: ${score} / ${quizQuestions.length}`;
		} else {
			pageTitle = 'Quiz | Svelte Quiz App';
			pageDescription = 'Test your knowledge with this fun Svelte quiz app.';
		}
	}

	let pageTitle = 'Svelte Quiz App';
	let pageDescription = 'Test your knowledge with this fun Svelte quiz app.';

	function backToMenu() {
		goto('/');
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<div class={theme.container.page}>
	<div class="w-full max-w-md">
		{#if !quizCompleted}
			<div class="mb-4">
				<Question
					question={quizQuestions[currentQuestionIndex].question}
					options={quizQuestions[currentQuestionIndex].options}
					{selectedAnswer}
					onAnswer={handleAnswer}
				/>
			</div>
			<div class="mb-4 flex items-center justify-between">
				<span class={theme.text.questionNumber}>
					Question {currentQuestionIndex + 1} / {quizQuestions.length}
				</span>
				<span class={theme.text.questionNumber}>
					Time Left: {timeLeft} seconds
				</span>
			</div>
			<div class="flex items-center justify-end">
				<button
					on:click={nextQuestion}
					disabled={!selectedAnswer}
					class={selectedAnswer ? theme.button.primary : theme.button.disabled}
				>
					Next
				</button>
			</div>
		{:else}
			<div class={theme.container.card + ' text-center'}>
				<h2 class={theme.text.title}>Quiz Completed!</h2>
				<p class={theme.text.body}>Your score: {score} / {quizQuestions.length}</p>
				<div class="flex items-center justify-center gap-2">
					<button on:click={backToMenu} class={theme.button.secondary}> Menu </button>
					<button on:click={restartQuiz} class={theme.button.success}> Restart </button>
				</div>
			</div>
		{/if}
	</div>
</div>
