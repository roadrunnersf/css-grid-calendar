const everyNFromArray = (arr: any[], everyN: number) =>
	arr.filter((el, index) => (index + everyN) % everyN === 0)

export default everyNFromArray
