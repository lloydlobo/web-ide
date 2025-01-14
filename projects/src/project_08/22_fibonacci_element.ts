export const main = `// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/Main.vm

// Contains one function: Main.fibonacci.

// Computes the n'th element of the Fibonacci series, recursively.
// n is given in argument[0]. Called by the Sys.init function 
// (part of the Sys.vm file), which sets argument[0] to an input
// value and then calls Main.fibonacci.
function Main.fibonacci 0
	push argument 0
	push constant 2
	lt                     
	if-goto N_LT_2        
	goto N_GE_2
label N_LT_2               // if n < 2 returns n
	push argument 0        
	return
label N_GE_2               // if n >= 2 returns fib(n - 2) + fib(n - 1)
	push argument 0
	push constant 2
	sub
	call Main.fibonacci 1  // computes fib(n - 2)
	push argument 0
	push constant 1
	sub
	call Main.fibonacci 1  // computes fib(n - 1)
	add                    // returns fib(n - 1) + fib(n - 2)
	return
`;

export const sys = `// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/Sys.vm

// Containts one function: Sys.init.

// Pushes a constant n onto the stack, and calls the Main.fibonacii
// function, which computes the n'th element of the Fibonacci series.
// Note that by convention, the Sys.init function is called "automatically" 
// by the bootstrap code generated by the VM translator.
function Sys.init 0
    // Computes fibonacci(4)
	push constant 4
	// Calls the function, informing that one argument was pushed onto the stack
	call Main.fibonacci 1
label END  
	goto END  // loops infinitely`;

export const vm_tst = `// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/FibonacciElementVME.tst

// Tests and illustrates the given Fibonacci element program on the VM emulator.

load,
compare-to FibonacciElement.cmp,

set sp 261,

repeat 110 {
  vmstep;
}

// Outputs the stack pointer and the value at the stack's base.
// That's where the implementation should put the return value.  
output-list RAM[0]%D1.6.1 RAM[261]%D1.6.1;
output;
`;

export const hdl_tst = `// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/8/FunctionCalls/FibonacciElement/FibonacciElement.tst

// Tests FibonacciElement.asm on the CPU emulator. 
// FibonacciElement.asm results from translating Main.vm and Sys.vm into
// a single assembly program, stored in the file FibonacciElement.asm.

load FibonacciElement.asm,
compare-to FibonacciElement.cmp,

repeat 6000 {
	ticktock;
}

// Outputs the stack pointer and the value at the stack's base.
// That's where the implementation should put the return value.
output-list RAM[0]%D1.6.1 RAM[261]%D1.6.1;
output;
`;

export const cmp = `| RAM[0] |RAM[261]|
|    262 |      3 |
`;
