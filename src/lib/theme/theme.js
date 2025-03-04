// src/lib/theme.js
export const theme = {
	button: {
		primary:
			'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-sm',
		secondary:
			'px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300 text-sm',
		success:
			'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 text-sm',
		disabled: 'px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed text-sm'
	},
	container: {
		card: 'bg-white rounded-lg shadow-md p-6',
		page: 'flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'
	},
	text: {
		title: 'text-xl font-semibold mb-2',
		body: 'text-sm text-gray-700 mb-4',
		question: 'text-lg font-semibold mb-2 text-gray-800',
		questionNumber: 'text-sm text-gray-600'
	},
	input: {
		radioLabel:
			'flex items-center p-2 rounded-md border border-gray-300 w-full cursor-pointer hover:bg-gray-50 transition-colors duration-200 text-sm',
		radioInput: 'mr-2 form-radio text-blue-500 focus:ring-blue-500'
	}
};
