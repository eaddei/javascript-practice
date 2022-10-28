window.onload = () => {
	var expect = chai.expect;
	mocha.setup('bdd');

	describe('Sample with 3 acceptable solutions', () => {
		it('first sample function returns `This Works!`', () => {
			expect(test1()).to.eq("This Works!")
		});

		it('second sample function returns `This Works!`', () => {
			expect(test2()).to.eq("This Works!")
		});

		it('third sample function returns `This Works!`', () => {
			expect(test3()).to.eq("This Works!")
		});
	});

	describe('#01: Sum', () => {
		it("returns 0 if the input is empty", () => {
			expect(sum([]), "Default value is incorrect").to.eq(0)
		})

		it("sums the integers in the array", () => {
			expect(sum([2])).to.eq(2)
			expect(sum([2, 4])).to.eq(6)
			expect(sum([2, 4, 6])).to.eq(12)
			expect(sum([2, 4, 6, 8])).to.eq(20)
			expect(sum([2, 4, 6, 8, 10])).to.eq(30)
		})
	})

	describe('#02: Double Letters', () => {
		it("returns an empty string when the input is empty", () => {
			expect(doubleLetters(""), "Default value is incorrect").to.eq("")
		})

		it("doubles every letter in the given string", () => {
			expect(doubleLetters("abc")).to.eq("aabbcc")
			expect(doubleLetters("xyzpdq")).to.eq("xxyyzzppddqq")
		})
	})

	describe('#03: Double Numbers', () => {
		it("returns an empty array when the input is empty", () => {
			expect(doubleNumbers([]), "Default value is incorrect").to.deep.eq([])
		})

		it("doubles every number in the given array", () => {
			expect(doubleNumbers([1, 2, 3])).to.deep.eq([2, 4, 6])
			expect(doubleNumbers([10, 20, 30, 40])).to.deep.eq([20, 40, 60, 80])
		})
	})

	describe('#04: Multiply Numbers', () => {
		it("returns 0 when the input is empty", () => {
			expect(multiplyNumbers([], 3), "Default value is incorrect").to.deep.eq([])
		})

		it("doubles every number in the given array", () => {
			expect(multiplyNumbers([1, 2, 3], 3)).to.deep.eq([3, 6, 9])
			expect(multiplyNumbers([10, 20, 30, 40], 5)).to.deep.eq([50, 100, 150, 200])
		})
	})

	describe('#05: Merge Arrays', () => {
		it("returns an empty array when the inputs are empty", () => {
			expect(mergeArrays([], []), "Default value is incorrect").to.deep.eq([])
		})

		it("mergeArrayss elements from two arrays when input is present", () => {
			expect(mergeArrays(["a", "b", "c"], ["x", "y", "z"])).to.deep.eq(["a", "x", "b", "y", "c", "z"])
			expect(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])).to.deep.eq([1, 5, 2, 6, 3, 7, 4, 8])
		})
	})

	describe('#06: Create Range', () => {
		it("returns an empty array when the input is empty", () => {
			expect(createRange(0), "Default value is incorrect").to.deep.eq([])
		})

		it("creates an array of the specified length with the specified values", () => {
			expect(createRange(4, "a")).to.deep.eq(["a", "a", "a", "a"])
			expect(createRange(7, "z")).to.deep.eq(["z", "z", "z", "z", "z", "z", "z"])
		})
	})

	describe('#07: Flip Array', () => {
		it("returns an empty object when the input is empty", () => {
			expect(flipArray([]), "Default value is incorrect").to.deep.eq({})
		})

		it("turns the of items into an object", () => {
			expect(flipArray(["a", "b", "c"])).to.deep.eq({ a: 0, b: 1, c: 2 })
			expect(flipArray([10, 20])).to.deep.eq({ 10: 0, 20: 1 })
		})
	})

	describe('#08: Arrays to Object', () => {
		it("returns an empty object when the input is empty", () => {
			expect(arraysToObject([]), "Default value is incorrect").to.deep.eq({})
		})

		it("turns the array of arrays into an object", () => {
			expect(arraysToObject([["name", "Sue"], ["age", "24"]])).to.deep.eq({ name: "Sue", age: "24" })
			expect(arraysToObject([["height", 24], ["weight", 22]])).to.deep.eq({ height: 24, weight: 22 })
		})
	})

	describe('#09: Reverse String', () => {
		it("returns an empty string when the input is empty", () => {
			expect(reverseString(""), "Default value is incorrect").to.deep.eq("")
		})

		it("returns the string reversed", () => {
			expect(reverseString("Sue")).to.deep.eq("euS")
			expect(reverseString("Steve")).to.deep.eq("evetS")
		})

		it("does not call the builtin `.reverse` method", () => {
			expect(reverseString.toString()).to.not.match(/\.split|\.reverse/)
		})
	})

	describe('#10: Repeats', () => {
		it("returns true when given an empty string (which seems strange, but go with it :)", () => {
			expect(repeats(""), "Default value is incorrect").to.deep.eq(true)
		})

		it("returns true when the second half of the string equals the first", () => {
			expect(repeats("bahbah")).to.deep.eq(true)
			expect(repeats("nananananananana")).to.deep.eq(true)
		})

		it("returns false when the second half of the string does not equal the first", () => {
			expect(repeats("bahba")).to.deep.eq(false)
			expect(repeats("nananananann")).to.deep.eq(false)
		})

		it("does not use .repeat", () => {
			expect(repeats.toString()).to.not.match(/\.repeat/)
		})
	})

	describe('#11: Every Other', () => {
		it("returns an empty string when given an empty string", () => {
			expect(everyOther(""), "Default value is incorrect").to.deep.eq("")
		})

		it("returns a string with every other letter", () => {
			expect(everyOther("a")).to.deep.eq("a")
			expect(everyOther("ab")).to.deep.eq("a")
			expect(everyOther("abc")).to.deep.eq("ac")
			expect(everyOther("abc")).to.deep.eq("ac")
			expect(everyOther("abcd")).to.deep.eq("ac")
			expect(everyOther("abcde")).to.deep.eq("ace")
			expect(everyOther("Hello there")).to.deep.eq("Hlotee")
		})
	})

	describe('#12: All Equal', () => {
		it("returns true when given an empty string", () => {
			expect(allEqual(""), "Default value is incorrect").to.deep.eq(true)
		})

		it("returns true when all letters are equal", () => {
			expect(allEqual("aaa")).to.deep.eq(true)
			expect(allEqual("bbbbb")).to.deep.eq(true)
		})

		it("returns false when all letters are not equal", () => {
			expect(allEqual("ab")).to.deep.eq(false)
			expect(allEqual("abbbbbbb")).to.deep.eq(false)
		})

		it("returns false with the unequal letter(s) at the end of a string", () => {
			expect(allEqual("aardvark")).to.deep.eq(false)
			expect(allEqual("aaaal")).to.deep.eq(false)
		})
	})

	describe('#13: Sum of Letters', () => {
		it("returns 0 when given an empty string", () => {
			expect(sumLetters(""), "Default value is incorrect").to.deep.eq(0)
		})

		it("returns the sum of the numbers contained in the string", () => {
			expect(sumLetters("111")).to.deep.eq(3)
			expect(sumLetters("2233")).to.deep.eq(10)
		})
	})

	describe('#14: Count Vowels', () => {
		it("returns 0 when given an empty string", () => {
			expect(countVowels(""), "Default value is incorrect").to.deep.eq(0)
		})

		it("returns the count of the vowels in a string (not counting 'y')", () => {
			expect(countVowels("aeiouy")).to.deep.eq(5)
			expect(countVowels("Hello")).to.deep.eq(2)
		})
	})

	describe('#15: Split String', () => {
		it("returns an empty array when given an empty string", () => {
			expect(split(""), "Default value is incorrect").to.deep.eq([])
		})

		it("returns an array containing the characters of the string", () => {
			expect(split("Hello")).to.deep.eq(["H", "e", "l", "l", "o"])
			expect(split("hi")).to.deep.eq(["h", "i"])
		})

		it("does not use the builtin split method", () => {
			expect(split.toString()).to.not.match(/\.split/)
		})
	})

	describe('#16: Get Code Points', () => {
		it("returns an empty array when given an empty string", () => {
			expect(getCodePoints(""), "Default value is incorrect").to.deep.eq([])
		})

		it("returns an array containing the codePoints of each letter in the string", () => {
			expect(getCodePoints("Hello")).to.deep.eq([72, 101, 108, 108, 111])
			expect(getCodePoints("hi")).to.deep.eq([104, 105])
		})
	})

	describe('#17: Letter Map', () => {
		it("returns an empty object when given an empty string", () => {
			expect(letterMap(""), "Default value is incorrect").to.deep.eq({})
		})

		it("returns an object that maps letters to their _last_ position in the string", () => {
			expect(letterMap("up")).to.deep.eq({ u: 0, p: 1 })
			expect(letterMap("Hello")).to.deep.eq({ H: 0, e: 1, l: 3, o: 4 })
			expect(letterMap("aaa")).to.deep.eq({ a: 2 })
		})
	})

	describe('#18: Count Letters', () => {
		it("returns an empty object when given an empty string", () => {
			expect(letterCount(""), "Default value is incorrect").to.deep.eq({})
		})

		it("returns an object that maps letters to the number of occurrences", () => {
			expect(letterCount("up")).to.deep.eq({ u: 1, p: 1 })
			expect(letterCount("Hello")).to.deep.eq({ H: 1, e: 1, l: 2, o: 1 })
			expect(letterCount("aaa")).to.deep.eq({ a: 3 })
		})
	})

	describe('#19: Three Odd Numbers', () => {
		it("returns false when passed 0s", () => {
			expect(threeOdds(0, 0), "Default value is incorrect").to.deep.eq(false)
		})

		it("returns true if there are at least 3 odd whole numbers between the numbers given", () => {
			expect(threeOdds(0, 6)).to.deep.eq(true)
			expect(threeOdds(0, 7)).to.deep.eq(true)
			expect(threeOdds(10, 18)).to.deep.eq(true)
		})

		it("returns false if there are not at least 3 odd whole numbers between the numbers given", () => {
			expect(threeOdds(0, 2)).to.deep.eq(false)
			expect(threeOdds(0, 3)).to.deep.eq(false)
			expect(threeOdds(0, 4)).to.deep.eq(false)
			expect(threeOdds(0, 5)).to.deep.eq(false)
		})
	})

	describe('#20: Pad String Left', () => {
		it("returns the original string when it's longer than the padding", () => {
			expect(leftPad("Hello", 0, "-")).to.deep.eq("Hello")
			expect(leftPad("Hello", 1, "-")).to.deep.eq("Hello")
			expect(leftPad("Hello", 2, "-")).to.deep.eq("Hello")
			expect(leftPad("Hello", 3, "-")).to.deep.eq("Hello")
			expect(leftPad("Hello", 4, "-")).to.deep.eq("Hello")
			expect(leftPad("Hello", 5, "-")).to.deep.eq("Hello")
		})

		it("returns a string of the specified length padded by the specified character", () => {
			expect(leftPad("Hello", 6, "-")).to.deep.eq("-Hello")
			expect(leftPad("Hello", 7, "-")).to.deep.eq("--Hello")
			expect(leftPad("Hello", 8, "-")).to.deep.eq("---Hello")
			expect(leftPad("a", 4, "^")).to.deep.eq("^^^a")
			expect(leftPad("bb", 5, " ")).to.deep.eq("   bb")
		})
	})

	describe('#21: Multiply String', () => {
		it("returns an empty string when given 0 or a negative number", () => {
			expect(createString(0, "r")).to.deep.eq("")
			expect(createString(-1, "r")).to.deep.eq("")
		})

		it("returns a string of spaces of the specified length when given a positive number", () => {
			expect(createString(1, "r")).to.deep.eq("r")
			expect(createString(3, "w")).to.deep.eq("www")
		})
	})

	describe('#22: Factorial', () => {
		it("returns 1 when given 0", () => {
			expect(factorial(0)).to.deep.eq(1)
		})

		it("returns the factorial of the number", () => {
			expect(factorial(1)).to.deep.eq(1)
			expect(factorial(2)).to.deep.eq(2)
			expect(factorial(3)).to.deep.eq(6)
			expect(factorial(4)).to.deep.eq(24)
			expect(factorial(5)).to.deep.eq(120)
			expect(factorial(6)).to.deep.eq(720)
		})
	})

	describe('#23: Between the Numbers', () => {
		it("returns an empty array when passed 0", () => {
			expect(arrayOfNumbers(0)).to.deep.eq([])
		})

		it("returns an array of all of the numbers between 1 and that number, inclusive", () => {
			expect(arrayOfNumbers(1)).to.deep.eq([1])
			expect(arrayOfNumbers(2)).to.deep.eq([1, 2])
			expect(arrayOfNumbers(3)).to.deep.eq([1, 2, 3])
			expect(arrayOfNumbers(4)).to.deep.eq([1, 2, 3, 4])
			expect(arrayOfNumbers(5)).to.deep.eq([1, 2, 3, 4, 5])
			expect(arrayOfNumbers(6)).to.deep.eq([1, 2, 3, 4, 5, 6])
		})
	})

	describe('#24: Even Odd', () => {
		it("returns an empty object when passed 0s", () => {
			expect(evenOdd(0, 0)).to.deep.eq({})
		})

		it("returns an object with all of the numbers between those numbers (inclusive), and whether they are even or odd", () => {
			expect(evenOdd(0, 1)).to.deep.eq({ 0: "even", 1: "odd" })
			expect(evenOdd(11, 15)).to.deep.eq({ 11: "odd", 12: "even", 13: "odd", 14: "even", 15: "odd" })
		})
	})

	describe('#25: Growing Keys', () => {
		it("returns an empty object when passed 0", () => {
			expect(growingKeys(0, "a")).to.deep.eq({})
		})

		it("returns an object with as many keys specified, with the keys growing by one each time", () => {
			expect(growingKeys(1, "a")).to.deep.eq({ "a": true })
			expect(growingKeys(2, "b")).to.deep.eq({ "b": true, "bb": true })
			expect(growingKeys(3, "c")).to.deep.eq({ "c": true, "cc": true, "ccc": true })
		})
	})

	describe('#26: Every Element', () => {
		it("returns true when passed an empty array", () => {
			expect(every([], "a")).to.deep.eq(true)
		})

		it("returns true when all elements match the given value", () => {
			expect(every([1, 1], 1)).to.deep.eq(true)
			expect(every(["A", "A", "A"], "A")).to.deep.eq(true)
		})

		it("returns false when not all elements match the given value", () => {
			expect(every([1, 2], 1)).to.deep.eq(false)
			expect(every(["A", "B", "A"], "A")).to.deep.eq(false)
		})

		it("does not use .every", () => {
			expect(every.toString()).to.not.match(/\.every/)
		})
	})

	describe('#27: Some Element', () => {
		it("returns false when passed an empty array", () => {
			expect(some([], "a")).to.deep.eq(false)
		})

		it("returns true when at least one element matches the given value", () => {
			expect(some([1, 2], 1)).to.deep.eq(true)
			expect(some(["A", "B", "C"], "B")).to.deep.eq(true)
		})

		it("returns false when no elements match the given value", () => {
			expect(some([1, 2], 3)).to.deep.eq(false)
			expect(some(["A", "B", "A"], "D")).to.deep.eq(false)
		})

		it("does not use .some", () => {
			expect(some.toString()).to.not.match(/\.some/)
		})
	})

	describe('#28: To Sentence', () => {
		it("returns an empty string when passed an empty array", () => {
			expect(toSentence([])).to.deep.eq("")
		})

		it("returns a string with the elements joined by a comma, with the last element separated by 'and'", () => {
			expect(toSentence(["cat", "bird"])).to.deep.eq("cat and bird")
			expect(toSentence(["a", "b", "c"])).to.deep.eq("a, b and c")
			expect(toSentence(["a", "b", "c", "d"])).to.deep.eq("a, b, c and d")
		})

		it("does not use .join", () => {
			expect(toSentence.toString()).to.not.match(/\.join/)
		})
	})

	describe('#29: Acronym', () => {
		it("returns an empty string when passed an empty array", () => {
			expect(acronym([])).to.deep.eq("")
		})

		it("returns a string that's an acronym of the items of the array", () => {
			expect(acronym(["cat", "bird"])).to.deep.eq("cb")
			expect(acronym(["how", "now", "brown", "cow"])).to.deep.eq("hnbc")
		})
	})

	describe('#30: Lowest Number', () => {
		it("returns undefined when passed an empty array", () => {
			expect(min([])).to.deep.eq(undefined)
		})

		it("returns the minimum value of the array", () => {
			expect(min([1])).to.deep.eq(1)
			expect(min([1, 0])).to.deep.eq(0)
			expect(min([1, -1, 0])).to.deep.eq(-1)
			expect(min([1, -1, 0, -45])).to.deep.eq(-45)
		})

		it("does not use Math.min", () => {
			expect(min.toString()).to.not.match(/Math\.min/)
		})
	})

	describe('#31: Object Indeces', () => {
		it("returns an empty object when passed an empty array", () => {
			expect(index([], 'id')).to.deep.eq({})
		})

		it("returns an object indexed by the given property", () => {
			expect(index([{ id: 1, name: "Will" }, { id: 2, name: "Sue" }], 'id')).to.deep.eq({
				1: { id: 1, name: "Will" },
				2: { id: 2, name: "Sue" },
			})

			expect(index([{ name: "Will", age: 32 }, { name: "Sue", age: 33 }], 'name')).to.deep.eq({
				'Will': { name: "Will", age: 32 },
				'Sue': { name: "Sue", age: 33 },
			})
		})
	})

	describe('#32: Invert Keys and Values', () => {
		it("returns an empty object when passed an empty object", () => {
			expect(invert({})).to.deep.eq({})
		})

		it("returns an object where the keys and values have been swapped", () => {
			expect(invert({ a: "1", b: "2", c: "3" })).to.deep.eq({ 1: "a", 2: "b", 3: "c" })
			expect(invert({ "hello": "world" })).to.deep.eq({ world: "hello" })
		})

		it("does not use Object.keys or Object.values", () => {
			expect(invert.toString()).to.not.match(/Object\.keys|Object\.values/)
		})
	})

	describe('#33: Add Signature', () => {
		it("returns an empty object when passed an empty object", () => {
			expect(addSignature({})).to.deep.eq({})
		})

		it("returns an object where the keys have '-signed' appended", () => {
			let input = {
				"Contract": "blah blah"
			}
			let expected = {
				"Contract-signed": "blah blah - Joe"
			}

			expect(addSignature(input, "Joe")).to.deep.eq(expected)

			input = {
				"Agreement": "something",
				"Code of Conduct": "blah blah"
			}
			expected = {
				"Agreement-signed": "something - Beth",
				"Code of Conduct-signed": "blah blah - Beth"
			}

			expect(addSignature(input, "Beth")).to.deep.eq(expected)
		})
	})

	describe('#34: Array Key Value Pairs', () => {
		it("returns an empty array when passed an empty object", () => {
			expect(pairs({})).to.deep.eq([])
		})

		it("returns an object where the keys have '-signed' appended", () => {
			expect(pairs({ a: "b", c: "d" })).to.deep.eq(["a - b", "c - d"])
			expect(pairs({ hey: "there" })).to.deep.eq(["hey - there"])
		})
	})

	describe('#35: Sum Object Values', () => {
		it("returns 0 when passed an empty object", () => {
			expect(sumValues({})).to.deep.eq(0)
		})

		it("returns the sum of the values", () => {
			expect(sumValues({ a: 1, c: 5 })).to.deep.eq(6)
			expect(sumValues({ foo: 12, bar: 5, baz: 3 })).to.deep.eq(20)
		})

		it("does not use Object.values", () => {
			expect(sumValues.toString()).to.not.match(/Object\.values/)
		})
	})

	describe('#36: Biggest Object Name', () => {
		it("returns undefined when passed an empty object", () => {
			expect(biggestProperty({})).to.deep.eq(undefined)
		})

		it("returns the name of the property that has the highest value", () => {
			expect(biggestProperty({ a: 1, c: 5 })).to.deep.eq("c")
			expect(biggestProperty({ acme: 3, foo: 12, bar: 5, baz: 3 })).to.deep.eq("foo")
		})

		it("does not use Math.max or Object.keys", () => {
			expect(biggestProperty.toString()).to.not.match(/Object\.keys|Math\.max/)
		})
	})

	describe('#37: Key for Value', () => {
		it("returns undefined when passed an empty object", () => {
			expect(keyForValue({}, 12)).to.deep.eq(undefined)
		})

		it("returns the name of the property that has the matching value", () => {
			expect(keyForValue({ a: 1, c: 5 }, 5)).to.deep.eq("c")
			expect(keyForValue({ foo: 12, bar: 5, baz: 3 }, 12)).to.deep.eq("foo")
		})
	})

	describe('#38: Object Contains Value', () => {
		it("returns false when passed an empty object", () => {
			expect(containsValue({}, 2)).to.deep.eq(false)
		})

		it("returns true if the object has the value", () => {
			expect(containsValue({ a: 1, c: 5 }, 5)).to.deep.eq(true)
			expect(containsValue({ acme: 3, foo: 12, bar: 5, baz: 3 }, 12)).to.deep.eq(true)
		})

		it("returns false if the object does not have the value", () => {
			expect(containsValue({ a: 1, c: 5 }, 7)).to.deep.eq(false)
			expect(containsValue({ acme: 3, foo: 12, bar: 5, baz: 3 }, 45)).to.deep.eq(false)
		})

		it("does not use .includes", () => {
			expect(containsValue.toString()).to.not.match(/\.includes/)
		})
	})

	mocha.run();
};
