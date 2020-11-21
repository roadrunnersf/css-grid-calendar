import { everyNFromArray } from './'

it('everyNFromArray', () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8]

	expect(everyNFromArray(arr, 1)).toEqual(arr)
	expect(everyNFromArray(arr, 2)).toEqual([1, 3, 5, 7])
	expect(everyNFromArray(arr, 3)).toEqual([1, 4, 7])
	expect(everyNFromArray(arr, 4)).toEqual([1, 5])
})
